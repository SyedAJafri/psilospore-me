import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import classNames from 'classnames';

const Footer = (props) => {

  return (

    <div>
        <Header id='name-title-container'>
          <Header.Content as='h1'>
            <Header.Subheader id='my-description'>
                Check out my social links below 👀, email me at <a href="mailto:syedjafri99.psilosporeme@gmail.com?Subject=Hey%20Dude">syedjafri99@gmail.com 📧</a>, or download my <a target="_blank" href="https://www.dropbox.com/s/vw2hdde1ztnpabg/Jafri_Syed_Resume.pdf?dl=0">résumé 📝</a>
            </Header.Subheader>
          </Header.Content>
        </Header>
      <Segment inverted vertical id='footer'>
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
        </div>

      </Segment>
    </div>

      
    )
}

export default Footer;