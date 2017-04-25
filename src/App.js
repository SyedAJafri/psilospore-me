import React, { Component } from 'react';
import reactLogo from './logo.svg';
import '../semantic/dist/semantic.min.css';

import './css/Index.css';
import './css/App.css';
import './css/SkillBox.css';

import { Container, GridColumn, Grid, GridRow, Segment, Item, ItemHeader, Image, Header, Icon, Card, Dimmer, DimmerDimmable } from 'semantic-ui-react';
import { LanguagesPage, ToolsPage } from './components/Skill.js';


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
      pageNum: 1
    };
  };

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

    let currentPage;
    switch (this.state.pageNum) {
      case 0:
        currentPage = <IntroPage></IntroPage>;
        break;
      case 1:
        currentPage = <LanguagesPage></LanguagesPage>
        break;
      case 2:
        currentPage = <ToolsPage></ToolsPage>
        break;
    }

    return (
      <div className="App">
        <Navigation
          pageNum={this.state.pageNum}
          NUMBER_OF_PAGES={this.NUMBER_OF_PAGES}
        ></Navigation>
        {currentPage}
        <Footer
          showHelper={this.state.firstTime}
        ></Footer>
      </div>
    );

  }
}



export default App;
