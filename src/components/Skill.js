import React from 'react';
import classNames from 'classnames';
import PageTitle from './common/PageTitle.js';

import SKILLS_DATA from '../data/skills.js';
import '../css/SkillBox.css';


class SkillBox extends React.Component {
  render() {

    let skillBoxStyles = classNames({
      'box': true,
      'skillbox': true,
      'selected-skillbox': this.props.active
    });

    return (
      <div className={skillBoxStyles} onClick={this.props.onClick}>
        <div className='circle'></div>
        <a className='skill-title'>{this.props.title}</a>
      </div>
    )
  }

}

class SkillInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideLeft: true
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.title !== this.props.title) { // Slide left if new props
      this.setState({slideLeft: true});
    }
  }

  render() {
    let classes = 'box skill-info';
    if (this.state.slideLeft) {
      classes += ' slide-left';
      // Remove class when complete so animation is triggered next time props are changed
      setTimeout(() => this.setState({slideLeft: false}), 200);
    }
    return (
      <div className={classes}>
        <a className='skill-title'>{this.props.title}</a>
        <hr/>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

class Skills extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  /**
   * When a skillbox is clicked set the active state to it's index
   * @param {Number} index 
   */
  onClickSkillBox(index) {
    return (evt) => {
      this.setState({active: index});
      evt.stopPropagation();
    };
  }

  render() {
    let skills = SKILLS_DATA[this.props.skillsType].map((job, index) => {
      return (
        <SkillBox
          key={'skill' + index}
          onClick={this.onClickSkillBox(index)}
          active={index === this.props.active}
          {...job}
        />
      )
    });

    let selectedSkill = SKILLS_DATA[this.props.skillsType][this.state.active];
    let selectedSkillInfo = selectedSkill ?
        <SkillInfo
          description=''
          {...selectedSkill}
          />: <div></div>;
    return (
      <div>
        <PageTitle
          title={this.props.pageTitle}
        />
        <div className='container'>
        {selectedSkillInfo}
        {skills}
        </div>
      </div>
    )
  }

}

const LanguagesPage = (props) => {
  return (
    <Skills
      pageTitle="Languages"
      skillsType="languages"
    ></Skills>
  )
}

const ToolsPage = (props) => {
  return (
    <Skills
      pageTitle="Frameworks, Tools, and Libraries"
      skillsType="tools"      
    ></Skills>
  )
}

export { LanguagesPage, ToolsPage };