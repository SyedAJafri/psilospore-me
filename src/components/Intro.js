import React, { Component } from 'react';

import { Container, Header, Icon } from 'semantic-ui-react';

class IntroPage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Header.Content as='h1'>
            <Icon name='plug' fitted></Icon>
            <a id='nametitle'>Syed A Jafri</a>
            <Header.Subheader id='alias'>
              @psilospore
            </Header.Subheader>
          </Header.Content>
        </Header>

      </Container>

    )
  }
}

export default IntroPage;