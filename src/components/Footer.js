import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import classNames from 'classnames';

const Footer = (props) => {

  let footerStyles = classNames({
    "footer-transition": props.finalPage,
  });

  return (
      <Segment inverted vertical id='footer' className={footerStyles}>
        { props.showHelper &&
          <Segment basic id='navigation-footer-helper'>
            <a style={{paddingRight:'5px', color: 'white'}}>Arrow left or right</a>
          <Icon inverted size='large' name='toggle right'></Icon>
        </Segment>
        }
        <div id='footer-contents'>
          <a target="_blank" href="https://github.com/psilospore"><Icon link circular name='github'></Icon></a>
          <a target="_blank" href="https://stackoverflow.com/users/2205365/syed-jafri"><Icon link circular name='stack overflow'></Icon></a>
          <a target="_blank" href="https://www.linkedin.com/in/syedajafri"><Icon link circular name='linkedin'></Icon></a>
          <a target="_blank" href="https://codepen.io/psilospore"><Icon link circular name='code'></Icon></a>
          {
            props.finalPage &&
            <div>
              <Header.Subheader as='h2' >
                Thanks for checking me out! Check out my social links above 👆 or email me at <a href="mailto:syedjafri99.psilosporeme@gmail.com?Subject=Hey%20Dude">syedjafri99@gmail.com</a>
              </Header.Subheader>
                <Header.Subheader as='h3' >
                  <a href="dropboxLinkTODO">Download my résumé 📝</a>
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