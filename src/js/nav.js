import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

import {grey50, red500, yellowA400} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';





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


const styles = {
  title: {
    cursor: 'pointer',
    fontSize: '15px',
    fontFamily: 'helvetica',
    fontWeight: '100',
    paddingLeft: '15px',
    color: '#616161',
    borderLeft: '1px solid black',
    paddingLeft: '5px'
  },
};

class NavBar extends React.Component{
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          style={{width: '100%', margin: '0', borderBottom: '1px solid black', boxShadow: '0', padding: '0'}}
          title={<span style={styles.title}>MENU</span>}
          iconElementLeft={<img style={{height: "25px", marginLeft: "35px", marginTop: "11px"}} src="../../../img/crimson_logo.png"/>}

          iconElementRight={<h3 style={{color: 'white', fontFamily: 'open sans', fontWeight: '100', textAlign: 'center', marginTop: '0', marginBottom: '0', marginRight: '40px', width: '25px', height: '25px', backgroundColor: '#4771b8', padding: '8px', borderRadius: '100px'}}>JW</h3>}


        />
      </MuiThemeProvider>
  )
  }
}


export default NavBar;