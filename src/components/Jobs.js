import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PageTitle from './common/PageTitle.js';

class Job extends React.Component {
    render () {
        return (
            <Card raised={true}
            description={this.props.description}
            centered={true}
            >
                <Card.Content>
                    <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                    <Card.Header className='no-wrap'>
                    {this.props.companyName}
                    </Card.Header>
                    <Card.Meta className='no-wrap'>
                    <bold>Applications Developer</bold>
                    </Card.Meta>
                    <Card.Meta className='no-wrap'>
                    {this.props.dateText}
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
        return (
            <div>
                <PageTitle
                    title="Jobs"
                />
                 <Card.Group stackable={true}>
                    <Job
                        companyName='Incentive Technology Group'
                        dateText='April 17, 2017 to current'
                        jobDescription='fafskjfahashhasjfsah sasfjfs asfjkasjk aslkfjkfa afkjsk'
                    ></Job>
                    <Job
                        companyName='Incentive Technology Group'
                        dateText='April 17, 2017 to current'
                        jobDescription='fafskjfahashhasjfsah sasfjfs asfjkasjk aslkfjkfa afkjsk'
                    ></Job>
                    <Job
                        companyName='Incentive Technology Group'
                        dateText='April 17, 2017 to current'
                        jobDescription='fafskjfahashhasjfsah sasfjfs asfjkasjk aslkfjkfa afkjsk'
                    ></Job>
                </Card.Group>
            </div>
        )
    }
}

export default JobsPage;