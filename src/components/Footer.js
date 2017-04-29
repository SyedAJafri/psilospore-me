import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';

const Footer = (props) => {
  return (
      <Segment inverted vertical id='footer' className={[{"footer-transition": props.finalPage}]}>
        { props.showHelper &&
          <Segment basic id='navigation-footer-helper'>
            <a style={{paddingRight:'5px', color: 'white'}}>Arrow left or right</a>
          <Icon inverted size='large' name='toggle right'></Icon>
        </Segment>
        }
        <div id='footer-contents'>
          <Icon link circular name='github'></Icon>
          <Icon link circular name='stack overflow'></Icon>
          <Icon link circular name='linkedin'></Icon>
          <Icon link circular name='twitter'></Icon>
          {
            props.finalPage &&
            <div>
              <Header.Subheader as='h2' >
                Thanks for checking me out! Check out my social links above 👆 or email me at <a href="mailto:syedjafri99.psilosporeme@gmail.com?Subject=Hey%20Dude">syedjafri99@gmail.com</a>
              </Header.Subheader>
              <Header.Subheader as='h4' >
                Built with React JS
              </Header.Subheader>
            </div>

          }

          
        </div>

      </Segment>
    )
}

export default Footer;