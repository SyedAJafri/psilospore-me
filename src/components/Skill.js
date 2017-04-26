import React from 'react';
import SKILLS_DATA from '../skillsData.js';
import '../css/SkillBox.css';

class SkillBox extends React.Component {
  render() {
    let skillBoxClasses = 'box skillbox';
    if (this.props.active) {
      skillBoxClasses += ' selected-skillbox';
    }
    return (
      <div className={skillBoxClasses} onClick={this.props.onClick}>
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
    if (prevProps !== this.props) { // Slide left if new props
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
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          {...selectedSkill}
          />: <div></div>;
    return (
      <div>
        <h1 className='page-title'>{this.props.pageTitle}</h1>
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