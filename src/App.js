import React, { Component } from 'react';
import reactLogo from './logo.svg';
import '../semantic/dist/semantic.min.css';

import './App.css';

import { Container, GridColumn, Grid, GridRow, Segment, Item, ItemHeader, Image, Header, Icon } from 'semantic-ui-react';

class SkillBox extends Component {
  render() {
    return (
      <Segment circular raised className="skillbox">
        <Item.Group>
          <Item>
            { this.props.logo && <Item.Image size='tiny' src={this.props.logo} ></Item.Image> }
            <Item.Content>
              <ItemHeader>{this.props.skillTitle}</ItemHeader>
              { this.props.jobs && <Item.Meta> <b>Where</b> {this.props.jobs.toString().replace(',', ', ') } </Item.Meta> }
              { this.props.description && <Item.Description> {this.props.description} </Item.Description> }
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
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
            <Container fluid>
              <Header>Languages</Header>
              <SkillBox
                skillTitle='Javascript'
                logo={reactLogo}
                jobs={['Alertus', 'ITG', 'psilospore.me']}
              ></SkillBox>
              <SkillBox
                skillTitle='Java'
                jobs={['UMD', 'Alertus', 'ITG']}
              ></SkillBox>
              
            </Container>
            <Container fluid>
              <Header>Tools, Libraries, and Frameworks</Header>
              <SkillBox
                skillTitle='React JS'
                logo={logo}
                jobs={['psilospore.me']}
              ></SkillBox>
              <SkillBox
                skillTitle='Spring Framework'
                jobs={['ITG']}
              ></SkillBox>
            </Container>
          </Container>
      </div>
    );
  }
}



export default App;
