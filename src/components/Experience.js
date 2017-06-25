import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import PageTitle from './common/PageTitle.js';
import JOBS_DATA from '../data/jobs.js';
import EDUCATION_DATA from '../data/education.js';

import '../css/JobPage.css';

class ExperienceBox extends React.Component {
  render() {
    return (
      <Card className='job-box' raised={true} description={this.props.description} centered={true} fluid={true}>
        <Card.Content>
          {this.props.icon?
            <Image size='tiny' floated='right' src={this.props.icon} className='job-logo'/>: <div></div>}
          <div>
          <Card.Header className='no-wrap'>
            {this.props.header}
          </Card.Header>
          <Card.Meta className='no-wrap'>
            <bold>{this.props.subheader}</bold>
          </Card.Meta>
          <Card.Meta className='no-wrap'>
            {this.props.date}
          </Card.Meta>
          {this.props.description? <Card.Description>
            {this.props.description}
          </Card.Description> : <div></div>}
          </div>
        </Card.Content>
      </Card>
    )
  }
}

class JobsPage extends React.Component {
  render() {

    const jobs = JOBS_DATA.map((jobData) => {
      return (< ExperienceBox {
        ...jobData
      } />)
    });
    
    return (
      <div>
        <PageTitle title="Jobs"/>
        <Card.Group id='job-container'>
          {jobs}
        </Card.Group>
      </div>
    )
  }
}

class EducationPage extends React.Component {
  render() {

    const education = EDUCATION_DATA.map((educationData) => {
      return (< ExperienceBox {
        ...educationData
      } />)
    });
    
    return (
      <div>
        <PageTitle title="Education"/>
        <Card.Group id='job-container'>
          {education}
        </Card.Group>
      </div>
    )
  }
}

export { JobsPage, EducationPage };