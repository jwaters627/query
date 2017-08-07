import React from 'react';
import Chip from 'material-ui/Chip';

import {grey50, red500, yellowA400} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import suggestions from './data'
import MenuList from './menulist'
import AutoCompleteExample from './search'

import styles from '../css/search.css'



 const muiTheme = getMuiTheme({
    fontFamily: "Roboto",
    palette: {
      primary1Color: 'white',
      primary2Color: 'black',
      primary3Color: 'white',
      textColor: grey50,
      },
      appBar: {
        height: 55,
      },
});



export default class ChipExampleArray extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: 'none'};
    this.styles = {
      chip: {
        margin: 4,
        cursor: 'pointer',
        
      },
      wrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        flexWrap: 'wrap',
        float: 'left',
        
      },
    };
  }
    


  





  renderChip(data) {
    var color = ''
    if(data.inOrEx == 'exclude'){
      color = '#BF2A3A'
    }
    else{
      color = '#4771B8'
    }

    return (
      <div id="chips">
          <Chip
            backgroundColor= {color}
            labelColor= {'white'}
            key= {data.key}
            style= {this.styles.chip}
            onClick={(event)=>this.props.showMenu(data.key)}
          >
            {data.label.join(' | ')} 
            <svg height="12px" width= "22px" viewBox="10 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "10px"}}>
              <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" fill="#ffffff"/>
            </svg>
          </Chip>
          <div style={{position: "fixed", maxHeight:'500px'}}>
              <div  className='menuBox' id= {data.key} style={{display: 'none', height: '480px', overflow: 'scroll'}}>
                    <p 
                      id="addButton" 
                      onClick={(event)=>this.props.addToPill(data.key)}
                    >
                      ADD
                    </p>
                    <AutoCompleteExample 
                      style={{margin: '0'}}
                      addTypedWord={this.props.addTypedWord}
                      searchText={this.props.searchText}
                      handleUpdate={this.props.handleUpdate}
                    >
                    </AutoCompleteExample>
                    <MenuList 
                      menuClick={this.props.menuClick}
                    >
                    </MenuList>
                    <p 
                      id="deleteButton" 
                      onClick={(event)=>this.props.removeChip(data.key)}
                    >
                      DELETE
                    </p>
              </div>
           </div>
            <div id={"includeExclude"}>
              <ul>
                <li id="include" onClick={this.props.include}>Include</li>
                <li id="exclude" onClick={this.props.exclude}>Exclude</li>
              </ul>
            </div>
        </div>
     
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={this.styles.wrapper}>
          {this.props.chips.map(this.renderChip, this)}
        </div>
      </MuiThemeProvider>
    );
  }
}
































