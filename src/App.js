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
            anchors: ['Intro', 'Education', 'Jobs', 'Languages', 'Tools', 'Finale'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '10px',
            delay: 650,
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
                  <Section><PsilosporeFooter></PsilosporeFooter></Section>
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
