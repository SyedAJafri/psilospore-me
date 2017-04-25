import React, { Component } from 'react';
import '../semantic/dist/semantic.min.css';

import './css/Index.css';
import './css/App.css';

import { LanguagesPage, ToolsPage } from './components/Skill.js';
import IntroPage from './components/Intro.js';
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';

class App extends Component {

  NUMBER_OF_PAGES = 2;

  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    };
  };

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDownTouchMove.bind(this));
    document.addEventListener('touchmove', this.handleKeyDownTouchMove.bind(this));
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDownTouchMove.bind(this))
    document.removeEventListener('touchmove', this.handleKeyDownTouchMove.bind(this));    
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
      default:
        throw new Error('Invalid page number');
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
