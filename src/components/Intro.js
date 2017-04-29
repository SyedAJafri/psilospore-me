import React from 'react';
import '../css/Intro.css';
import { Container, Header, Icon } from 'semantic-ui-react';

class IntroPage extends React.Component {
  render() {
    return (
      <Container>
        <Header id='name-title-container'>
          <Header.Content as='h1'>
            <a id='name-title'>Syed A Jafri</a>
            <Header.Subheader id='alias'>
              @psilospore
            </Header.Subheader>
            <Header.Subheader id='my-description'>
              Fullstack developer that has a passion for slinging 100% organic gluten-free artisian code
            </Header.Subheader>
          </Header.Content>
        </Header>

      </Container>

    )
  }
}

export default IntroPage;