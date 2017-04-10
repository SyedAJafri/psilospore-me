import React, { Component } from 'react';
import reactLogo from './logo.svg';
import '../semantic/dist/semantic.min.css';

import './css/App.css';

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

class SkillBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let skillBoxClasses = 'skillbox';
    if (this.props.active) {
      skillBoxClasses+= ' transition-skillbox-info';
    }
    return (
      <div className={skillBoxClasses} key={this.props.key} onClick={this.props.onClick}>
        <div className='circle'></div>
        <a className='title'>{this.props.title}</a>
        <SkillInfo
          location='ITG'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
      </div>
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

// Rename
function LoadingIcons(props) {
  let loadingIcons = [];
  for (let i = 0; i <= props.NUMBER_OF_PAGES; i++) {
    if (i === props.pageNum) {
      loadingIcons.push(<Icon key={i} name='thin circle' ></Icon>);
    } else {
      loadingIcons.push(<Icon key={i} name='circle' ></Icon>);
    }
  }
  return (
    <div>{loadingIcons}</div>
  );
}

class App extends Component {

  NUMBER_OF_PAGES = 2;

  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
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

    let page;
    switch (this.state.pageNum) {
      case 0:
        page = <IntroPage></IntroPage>;
        break;
      case 1:
        page = <LanguagesPage></LanguagesPage>
        break;
      case 2:
        page = <ToolsLibrariesPage></ToolsLibrariesPage>
        break;
    }

    return (
      <div className="App">
        <LoadingIcons
          pageNum={this.state.pageNum}
          NUMBER_OF_PAGES={this.NUMBER_OF_PAGES}
        ></LoadingIcons>
        {page}
        <Footer
          showHelper={this.state.firstTime}
        ></Footer>
      </div>
    );

  }
}



export default App;
