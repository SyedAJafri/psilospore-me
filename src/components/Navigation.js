import React from 'react';
import { Icon } from 'semantic-ui-react';

function Navigation(props) {
  let loadingIcons = [];
  for (let i = 0; i <= props.NUMBER_OF_PAGES; i++) {
    if (i === props.pageNum) {
      loadingIcons.push(<Icon key={i} name='thin circle' ></Icon>);
    } else {
      loadingIcons.push(<Icon key={i} name='circle' ></Icon>);
    }
  }
  return (
    <div className='navigation'>{loadingIcons}</div>
  );
}

export default Navigation;