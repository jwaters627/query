import React from 'react';

import styles from '../css/menu.css'


import suggestions from './data'
import MenuList from './menulist'
import AutoCompleteExample from './search'









class Suggested extends React.Component {

  render() {

    return (
      <div id="suggested" style={{display:this.props.display, position: 'fixed'}}>
        <div style={{position: "fixed"}}>
              <div  className='menuBox'>
              	<div id="chooseInclude">
              		<ul>
              			<li id='includeButton' onClick={this.props.includeClick}>Include</li>
              			<li id='excludeButton' onClick={this.props.excludeClick}>Exclude</li>
              		</ul> 
              	</div>
                  
                    <MenuList 
                      menuClick={this.props.menuClick}
                    >
                    </MenuList>
              
              </div>
           </div>
      </div>
      
    );
  }

}

export default Suggested;







