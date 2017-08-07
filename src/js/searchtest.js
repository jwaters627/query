import React from 'react';
import styles from '../css/search.css'

import ChipExampleArray from './chip'
import Suggested from './suggested'



class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hint: 'e.g. CEOs,"virtual reality", #homecooking', shown: 'none'};
  
  }

  render() {

    if(this.props.chips.length > 0){
      this.state.hint = 'Add word to include or exclude in search'
      this.state.shown = 'block'
    }
    else{
      this.state.hint = 'e.g. CEOs,"virtual reality", #homecooking'
      this.state.shown = 'none'
    }

 

    return (
      <div className="searchField">
          <textarea 
              id="myText" 
              onClick={this.props.handleTextAreaClick}
              placeholder={this.state.hint} 
              rows='1' 
              onKeyDown={this.props.capture}
            >
            </textarea>
            <Suggested 
              display={this.props.display} 
              menuClick={this.props.menuClick}
              includeClick={this.props.includeClick}
              excludeClick={this.props.excludeClick}
              >
              </Suggested>
          
            <ChipExampleArray 
              addTypedWord={this.props.addTypedWord} 
              include={this.props.include} 
              exclude={this.props.exclude} 
              showMenu={this.props.showMenu} 
              menuClick={this.props.menuClick} 
              addToPill={this.props.addToPill} 
              className="chipClass" 
              chips={this.props.chips} 
              removeChip={this.props.removeChip}
              searchText={this.props.searchText}
              handleUpdate={this.props.handleUpdate}
            >
            </ChipExampleArray>
         
            
          </div>
      
    );
  }

}

export default SearchField;




























