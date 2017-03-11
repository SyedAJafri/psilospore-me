import React, { Component } from 'react';
import logo from './logo.svg';
import '../semantic/dist/semantic.min.css';

import './App.css';

import { Container, GridColumn, Grid, GridRow, Segment, Item, ItemHeader } from 'semantic-ui-react';

class SkillBox extends Component {
  render() {
    return (
      <Segment raised className="skillbox">
        <Item.Group>
          <Item>
            <ItemHeader as='a'>React</ItemHeader>
          </Item>
        </Item.Group>
      </Segment>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Segment attached>
            Psilospore
          </Segment>
          <Container fluid>
            <SkillBox></SkillBox>
          </Container>
      </div>
    );
  }
}



export default App;
