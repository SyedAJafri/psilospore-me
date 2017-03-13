import React, { Component } from 'react';
import reactLogo from './logo.svg';
import '../semantic/dist/semantic.min.css';

import './App.css';

import { Container, GridColumn, Grid, GridRow, Segment, Item, ItemHeader, Image, Header, Icon, Card, Dimmer, DimmerDimmable } from 'semantic-ui-react';


class SkillBox extends Component {

  constructor(props){
    super(props);
    this.state = {active: false};
  }
  
  render() {

    let additionalDescription = [];
    if (this.props.jobs) {
      additionalDescription.push(<Item.Meta key={this.props.id + "_where"}> <b>Where</b> {this.props.jobs.toString().replace(/,/g, ', ') } </Item.Meta>);
    }
    if (this.props.description) {
      additionalDescription.push(<Item.Description key={this.props.id + "_description"}> {this.props.description} </Item.Description>);
    }

    // TODO onclick expand to include more like where and description
    return (
      <Card raised link className="skillbox" onClick={() => this.setState({active: !this.state.active})}>
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

const Footer = (props) => {
  return (
      <Segment inverted vertical className='footer'>
        { props.showHelper &&
          <Segment basic>
          <a style={{paddingRight:'5px', color: 'white'}}>Arrow left or right</a>
          <Icon inverted size='large' name='toggle right'></Icon>
        </Segment>
        }
        <Icon link circular name='github'></Icon>
        <Icon link circular name='stack overflow'></Icon>
        <Icon link circular name='linkedin'></Icon>
        <Icon link circular name='twitter'></Icon>
        <Header.Subheader as='h4' >
          Built with React JS + semantic ui
        </Header.Subheader>

      </Segment>
    )
}

class IntroPage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Header.Content as='h1'>
            <Icon name='plug' fitted></Icon>
            <a id='name-title'>Syed A Jafri</a>
            <Header.Subheader id='alias'>
              @psilospore
            </Header.Subheader>
          </Header.Content>
        </Header>

      </Container>

    )
  }
}

class LanguagesPage extends Component {
  //TODO merge with ToolsLibrariesPage once skills externalized
  render() {
    return (
      <Container fluid >
        <Header as='h1' dividing>Languages</Header>
        <Card.Group>
          <SkillBox
            id={0}          
            skillTitle='Javascript'
            jobs={['Alertus', 'Jibe', 'ITG', 'psilospore.me']}
            description='ssdgdgs adsgdgasf afsafs asf  as fasfasfafs asfasfassaas afas asfa ssfas as asfasfasasf  asfasfasafs asffassaf asffasf'
          ></SkillBox>
          <SkillBox
            id={1}
            skillTitle='Java'
            jobs={['UMD', 'Alertus', 'ITG']}
          ></SkillBox>
          <SkillBox
            id={2}          
            skillTitle='Java'
            jobs={['UMD', 'Alertus', 'ITG']}
          ></SkillBox>
          <SkillBox
            id={3}                    
            skillTitle='Java'
            jobs={['UMD', 'Alertus', 'ITG']}
          ></SkillBox>
          <SkillBox
            id={4}          
            skillTitle='Java'
            jobs={['UMD', 'Alertus', 'ITG']}
          ></SkillBox>
        </Card.Group>
      </Container>
    )
  }
}

class ToolsLibrariesPage extends Component {
  render() {
    return (
      <Container fluid >
        <Header as='h1' dividing>Tools, Libraries, and Frameworks</Header>
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
    )
  }
}

function LoadingIcons(props) {
  let loadingIcons = [];
  for (let i = 0; i <= props.NUMBER_OF_PAGES; i++) {
    if (i === props.pageNum) {
      loadingIcons.push(<Icon key={i} name='thin circle' ></Icon>);
    } else {
      loadingIcons.push(<Icon key={i} name='circle' ></Icon>);
    }
  }
  return (
    <div>{loadingIcons}</div>
  );
}

class App extends Component {

  NUMBER_OF_PAGES = 2;

  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      firstTime: true
    };
  };

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown.bind(this))
  }

  handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      if (this.state.pageNum > 0) {
        this.setState({pageNum: this.state.pageNum - 1});
        this.setState({firstTime: false});
      } else {
        //TODO wiggle animation
      }
    } else if (event.key === 'ArrowRight') {
      if (this.state.pageNum < this.NUMBER_OF_PAGES) {
        this.setState({pageNum: this.state.pageNum + 1});
        this.setState({firstTime: false});        
      } else {
        //TODO wiggle animation
      }
    }
  }

  

  render() {

    let page;
    switch (this.state.pageNum) {
      case 0:
        page = <IntroPage></IntroPage>;
        break;
      case 1:
        page = <LanguagesPage></LanguagesPage>
        break;
      case 2:
        page = <ToolsLibrariesPage></ToolsLibrariesPage>
        break;
    }

    return (
      <div className="App" onKeyDown={this.handleKeyPress}>
        <LoadingIcons
          pageNum={this.state.pageNum}
          NUMBER_OF_PAGES={this.NUMBER_OF_PAGES}
        ></LoadingIcons>
        {page}
        <Footer
          showHelper={this.state.firstTime}
        ></Footer>
      </div>
    );

  }
}



export default App;
