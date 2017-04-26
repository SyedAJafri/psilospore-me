import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';

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
          Built with React JS
        </Header.Subheader>

      </Segment>
    )
}

export default Footer;