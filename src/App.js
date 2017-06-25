import React from 'react';
import '../semantic/dist/semantic.min.css';

import './css/Index.css';
import './css/App.css';

import { LanguagesPage, ToolsPage } from './components/Skill.js';
import { JobsPage, EducationPage } from './components/Experience.js';
import IntroPage from './components/Intro.js';
import FinalPage from './components/Final.js';
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';

class App extends React.Component {

  PAGE_MAX_INDEX = 5;

  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      firstTime: true
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
      if (this.state.pageNum < this.PAGE_MAX_INDEX) {
        this.setState({pageNum: this.state.pageNum + 1});
        this.setState({firstTime: false});        
      } else {
        //TODO wiggle animation
      }
    } else if (!isNaN(event.key)) {
      const numEntered = Number.parseInt(event.key);
      if (1 <= numEntered && numEntered <= this.PAGE_MAX_INDEX + 1) {
        this.setState({pageNum: numEntered - 1});
        this.setState({firstTime: false});        
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
        currentPage = <EducationPage></EducationPage>
        break;
      case 2:
        currentPage = <JobsPage></JobsPage>
        break;
      case 3:
        currentPage = <LanguagesPage></LanguagesPage>
        break;
      case 4:
        currentPage = <ToolsPage></ToolsPage>
        break;
      case 5:
        currentPage = <FinalPage></FinalPage>
        break;
      default:
        throw new Error('Invalid page number');
    }

    return (
      <div className="App">
        <Navigation
          pageNum={this.state.pageNum}
          PAGE_MAX_INDEX={this.PAGE_MAX_INDEX}
        ></Navigation>
        {currentPage}
        <Footer
          showHelper={this.state.firstTime}
          finalPage={this.state.pageNum === this.PAGE_MAX_INDEX}
        ></Footer>
      </div>
    );

  }
}



export default App;
