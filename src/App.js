import React, { Component } from 'react';
import reactLogo from './logo.svg';
import '../semantic/dist/semantic.min.css';

import './App.css';

import { Container, GridColumn, Grid, GridRow, Segment, Item, ItemHeader, Image, Header, Icon, Card } from 'semantic-ui-react';

class SkillBox extends Component {
  
  render() {

    let additionalDescription = [];
    if (this.props.jobs) {
      additionalDescription.push(<Item.Meta> <b>Where</b> {this.props.jobs.toString().replace(/,/g, ', ') } </Item.Meta>);
    }
    if (this.props.description) {
      additionalDescription.push(<Item.Description> {this.props.description} </Item.Description>);
    }

    // TODO onclick expand to include more like where and description
    return (
      <Card raised centered link className="skillbox">
        <Item.Group>
          <Item>
            { this.props.logo && <Item.Image size='tiny' src={this.props.logo} ></Item.Image> }
            <Item.Content>
              <ItemHeader>{this.props.skillTitle}</ItemHeader>
              {additionalDescription}
            </Item.Content>
          </Item>
        </Item.Group>
      </Card>
    )
  }
}

class App extends Component {


  //TODO externalize jobs
  //TODO break up components further
  render() {
    return (
      <div className="App">
          <Container fluid>
            <Header dividing>
              <Header.Content as='h1'>
                <Icon name='plug' fitted></Icon>
                Syed A Jafri
              </Header.Content>
              <Header.Subheader>
                @psilospore
              </Header.Subheader>
              <Icon link circular name='github'></Icon>
              <Icon link circular name='stack overflow'></Icon>
              <Icon link circular name='linkedin'></Icon>
              <Icon link circular name='twitter'></Icon>
            </Header>
            <Container fluid >
              <Header as='h3'>Languages</Header>
              <Card.Group>
                <SkillBox
                  skillTitle='Javascript'
                  jobs={['Alertus', 'ITG', 'psilospore.me']}
                  description='ssdgdgs adsgdgasf afsafs asf  as fasfasfafs asfasfassaas afas asfa ssfas as asfasfasasf  asfasfasafs asffassaf asffasf'
                ></SkillBox>
                <SkillBox
                  skillTitle='Java'
                  jobs={['UMD', 'Alertus', 'ITG']}
                ></SkillBox>
                <SkillBox
                  skillTitle='Java'
                  jobs={['UMD', 'Alertus', 'ITG']}
                ></SkillBox>
                <SkillBox
                  skillTitle='Java'
                  jobs={['UMD', 'Alertus', 'ITG']}
                ></SkillBox>
                <SkillBox
                  skillTitle='Java'
                  jobs={['UMD', 'Alertus', 'ITG']}
                ></SkillBox>
              </Card.Group>
            </Container>
            <pre></pre>
            <Container fluid >
              <Header as='h3'>Tools, Libraries, and Frameworks</Header>
              <Card.Group>              
                <SkillBox
                  skillTitle='React JS'
                  logo={reactLogo}
                  jobs={['psilospore.me']}
                ></SkillBox>
                <SkillBox
                  skillTitle='Spring Framework'
                  jobs={['ITG']}
                ></SkillBox>
                </Card.Group>
            </Container>
          </Container>
          <Segment inverted fluid vertical className='footer'>
            <Header.Subheader as='h4' >
              Built with React JS + semantic ui
            </Header.Subheader>
          </Segment>
      </div>
    );
  }
}



export default App;
