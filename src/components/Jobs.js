import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import PageTitle from './common/PageTitle.js';
import JOBS_DATA from '../data/jobs.js';

import '../css/JobPage.css';

class Job extends React.Component {
  render() {
    return (
      <Card className='job-box' raised={true} description={this.props.description} centered={true} fluid={true}>
        <Card.Content>
          <Image floated='right' size='mini' src={this.props.icon}/>
          <Card.Header className='no-wrap'>
            {this.props.companyName}
          </Card.Header>
          <Card.Meta className='no-wrap'>
            <bold>{this.props.title}</bold>
          </Card.Meta>
          <Card.Meta className='no-wrap'>
            {this.props.date}
          </Card.Meta>
          <Card.Description>
            {this.props.jobDescription}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

class JobsPage extends React.Component {
  render() {

    const jobs = JOBS_DATA.map((jobData) => {
      return (< Job {
        ...jobData
      } />)
    });
    
    return (
      <div>
        <PageTitle title="Jobs"/>
        <Card.Group id='job-container' stackable={true}>
          {jobs}
        </Card.Group>
      </div>
    )
  }
}

export default JobsPage;