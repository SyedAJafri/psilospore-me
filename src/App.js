import React, { Component } from 'react';
import reactLogo from './logo.svg';
import '../semantic/dist/semantic.min.css';

import './css/Index.css';
import './css/App.css';
import './css/SkillBox.css';

import { Container, GridColumn, Grid, GridRow, Segment, Item, ItemHeader, Image, Header, Icon, Card, Dimmer, DimmerDimmable } from 'semantic-ui-react';

 const JOBS = [
      {
        title: 'React'
      },
      {
        title: 'Javascript'
      },
      {
        title: 'Java'
      },
      {
        title: 'Ruby'
      },
      {
        title: 'OCaml'
      },
      {
        title: 'Hibernate'
      },
      {
        title: 'Typescript'
      },
      {
        title: 'Typescript'
      },
      {
        title: 'Typescript'
      },
    ];


class IntroPage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Header.Content as='h1'>
            <Icon name='plug' fitted></Icon>
            <a id='nametitle'>Syed A Jafri</a>
            <Header.Subheader id='alias'>
              @psilospore
            </Header.Subheader>
          </Header.Content>
        </Header>

      </Container>

    )
  }
}

const Footer = (props) => {
  return (
      <Segment inverted vertical className='footer'>
        { props.showHelper &&
          <Segment basic>
          <a style={{paddingRight:'5px', color: 'white'}}>Arrow left or right</a>
          <Icon inverted size='large' name='toggle right'></Icon>
        </Segment>
        }
        <Icon link circular name='github'></Icon>
        <Icon link circular name='stack overflow'></Icon>
        <Icon link circular name='linkedin'></Icon>
        <Icon link circular name='twitter'></Icon>
        <Header.Subheader as='h4' >
          Built with React JS + semantic ui
        </Header.Subheader>

      </Segment>
    )
}
class SkillBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let skillBoxClasses = 'box skillbox';
    if (this.props.active) {
      skillBoxClasses += ' selected-skillbox';
    }
    return (
      <div className={skillBoxClasses} key={this.props.key} onClick={this.props.onClick}>
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
        <h3>Where {this.props.location}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}


// Rename
function Navigation(props) {
  let loadingIcons = [];
  for (let i = 0; i <= props.NUMBER_OF_PAGES; i++) {
    if (i === props.pageNum) {
      loadingIcons.push(<Icon key={i} name='thin circle' ></Icon>);
    } else {
      loadingIcons.push(<Icon key={i} name='circle' ></Icon>);
    }
  }
  return (
    <div className='navigation'>{loadingIcons}</div>
  );
}

class App extends Component {

  NUMBER_OF_PAGES = 2;

  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      active: 0
    };
  };

  skillBoxClicked(index) {
    return (evt) => {
      this.setState({active: index});
      evt.stopPropagation();
    };
  }
  

  handleKeyDownTouchMove = (event) => {
    console.log(event);
    if (event.key === 'ArrowLeft') {
      if (this.state.pageNum > 0) {
        this.setState({pageNum: this.state.pageNum - 1});
        this.setState({firstTime: false});
      } else {
        //TODO wiggle animation
      }
    } else if (event.key === 'ArrowRight') {
      if (this.state.pageNum < this.NUMBER_OF_PAGES) {
        this.setState({pageNum: this.state.pageNum + 1});
        this.setState({firstTime: false});        
      } else {
        //TODO wiggle animation
      }
    }
  }
  
  render() {

    let skills = JOBS.map((job, index) => {
      return (
        <SkillBox
          onClick={this.skillBoxClicked(index)}
          active={index === this.state.active}
          {...job}
        />
      )
    });

    let selectedSkill = JOBS[this.state.active];
    let selectedSkillInfo = selectedSkill ?
        <SkillInfo
          {...selectedSkill}
          location='ITG'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />: <div></div>;

    let page;
    switch (this.state.pageNum) {
      case 0:
        page = <IntroPage></IntroPage>;
        break;
      case 1:
        page = <div>
          <h1 className='page-title'>Skills</h1>
          <div className='container'>
            {selectedSkillInfo}
            {skills}
          </div>
        </div>
        break;
    }

    return (
      <div className="App">
        <Navigation
          pageNum={this.state.pageNum}
          NUMBER_OF_PAGES={this.NUMBER_OF_PAGES}
        ></Navigation>
        {page}
        <Footer
          showHelper={this.state.firstTime}
        ></Footer>
      </div>
    );

  }
}



export default App;
