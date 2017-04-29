import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PageTitle from './common/PageTitle.js';
import JOBS_DATA from '../data/jobs.js';

class Job extends React.Component {
    render () {
        return (
            <Card
                raised={true}
                description={this.props.description}
                centered={true}
            >
                <Card.Content>
                    <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                    <Card.Header className='no-wrap'>
                    {/*{this.props.companyName}*/}
                    </Card.Header>
                    <Card.Meta className='no-wrap'>
                    <bold>Applications Developer</bold>
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
  render () {

    const jobs = JOBS_DATA.map((jobData) => {<Job {...jobData} /> });
    debugger;
    return (
      <div>
        <PageTitle
          title="Jobs"
        />
        <Card.Group stackable={true}>
          {jobs}
        </Card.Group>
      </div>
    )
  }
}

export default JobsPage;