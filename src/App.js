import React from 'react';
import '../semantic/dist/semantic.min.css';

import './css/Index.css';
import './css/App.css';

import { LanguagesPage, ToolsPage } from './components/Skill.js';
import { JobsPage, EducationPage } from './components/Experience.js';
import IntroPage from './components/Intro.js';
import FinalPage from './components/Final.js';
import PsilosporeFooter from './components/Footer.js';
import Navigation from './components/Navigation.js';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

// class Example extends React.Component {

//   PAGE_MAX_INDEX = 5;

//   constructor(props) {
//     super(props);
//     this.state = {
//       current: 0,
//       firstTime: true
//     };
//   };

//   // componentWillMount() {
//   //   document.addEventListener('keydown', this.handleKeyDownTouchMove.bind(this));
//   //   document.addEventListener('touchmove', this.handleKeyDownTouchMove.bind(this));
//   // }

//   // componentWillUnmount(){
//   //   document.removeEventListener('keydown', this.handleKeyDownTouchMove.bind(this))
//   //   document.removeEventListener('touchmove', this.handleKeyDownTouchMove.bind(this));    
//   // }

//   // handleKeyDownTouchMove = (event) => {
//   //   console.log(event);
//   //   if (event.key === 'ArrowLeft') {
//   //     if (this.state.pageNum > 0) {
//   //       this.setState({pageNum: this.state.pageNum - 1});
//   //       this.setState({firstTime: false});
//   //     } else {
//   //       //TODO wiggle animation
//   //     }
//   //   } else if (event.key === 'ArrowRight') {
//   //     if (this.state.pageNum < this.PAGE_MAX_INDEX) {
//   //       this.setState({pageNum: this.state.pageNum + 1});
//   //       this.setState({firstTime: false});        
//   //     } else {
//   //       //TODO wiggle animation
//   //     }
//   //   } else if (!isNaN(event.key)) {
//   //     const numEntered = Number.parseInt(event.key);
//   //     if (1 <= numEntered && numEntered <= this.PAGE_MAX_INDEX + 1) {
//   //       this.setState({pageNum: numEntered - 1});
//   //       this.setState({firstTime: false});        
//   //     }
//   //   }
//   // }
  
//   render() {

//   let options = {
//       scrollCallback: (states) => this.setState({current: states.activeSection}),
//       arrowNavigation: true,
//       scrollBar: false,
//       navigation: true,
//   };

//     return (
//       <SectionsContainer className="container" {...options} activeSection={this.state.current}>
//           <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
//           <Section color="#A7DBD8">Page 2</Section>
//           <Section color="#E0E4CC">Page 3</Section>
//       </SectionsContainer>

//     );

//   }
// }


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        current: 0,
      }
    }

    render() {
        const options = {
            sectionClassName: 'section',
            anchors: ['Intro', 'Education', 'Jobs', 'Languages', 'Tools'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation: true,
            scrollCallback: (states) => this.setState({current: states.activeSection})
        };

        const {current} = this.state

        return (
            <div>
                <SectionsContainer className="container" {...options} activeSection={current}>
                  <Section><IntroPage></IntroPage></Section>
                  <Section><JobsPage></JobsPage></Section>
                  <Section><EducationPage></EducationPage></Section>                  
                  <Section><LanguagesPage></LanguagesPage></Section>
                  <Section><ToolsPage></ToolsPage></Section>
                </SectionsContainer>

                <div className="btnGroup">
                    <button onClick={() => this.setState({current: current - 1})} disabled={current === 0}>pre</button>
                    <button onClick={() => this.setState({current: current + 1})} disabled={current === 5}>next</button>
                </div>
            </div>
        )
    }
}

export default App;
