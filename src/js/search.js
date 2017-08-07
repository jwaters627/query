import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import styles from '../css/search.css';
import touchGenerated from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';





 const muiTheme = getMuiTheme({
  
  appBar: {
    palette: {
      primary1Color: 'grey50',
      },
    height: 250,
  },
});


const fruit = [
];

export default class AutoCompleteExample extends React.Component {



  constructor(props) {
    super(props);
    this.state = {};
    }


render(){
  return(
  <div>
    <AutoComplete
      menuStyle={{textAlign: 'center'}}
      listStyle={{fontFamily: "open sans"}}
      floatingLabelText="User Input"
      filter={AutoComplete.fuzzyFilter}
      dataSource={fruit}
      maxSearchResults={5}
      searchText={this.props.searchText}
      onUpdateInput={this.props.handleUpdate}
      onNewRequest={this.props.addTypedWord}
    />
  </div>
);
}
}









