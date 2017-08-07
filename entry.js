import React from 'react';
import ReactDom from 'react-dom';


import NavBar from './src/js/nav';
import AutoCompleteExample from './src/js/search';
import ChipExampleArray from './src/js/chip';
import DataImage from './src/js/dataImage';
import SearchField from './src/js/searchtest'
import ShowMenu from './src/js/showmenu'
import WelcomeMessage from './src/js/welcomemessage'
import suggestions from './src/js/data'








class MainDiv extends React.Component{


	constructor(props) {
	    super(props);
	    this.state = { chipList: [], counter: 0, searchText:'', addWords:[], display:'none' };
	    this.chipify = this.chipify.bind(this);
	    this.removeChip = this.removeChip.bind(this);
        this.capture = this.capture.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.menuClick = this.menuClick.bind(this);
        this.addToPill = this.addToPill.bind(this);
        this.include = this.include.bind(this);
        this.exclude = this.exclude.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.addTypedWord = this.addTypedWord.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleTextAreaClick = this.handleTextAreaClick.bind(this);
        this.includeClick = this.includeClick.bind(this);
        this.excludeClick = this.excludeClick.bind(this);
	}

	 chipify( requestString, color ){
	 	if(requestString == ''){return}
	 	else{
		 	var newObj = {}
	    	newObj.key = this.state.counter
	    
	    	this.state.counter += 1
	    	newObj.label = [requestString]
	    	newObj.inOrEx = color
	    	this.state.added = true
	    	this.state.chipList.push(newObj)
	    	this.setState({chipList: this.state.chipList})
    	}
    	document.getElementById('chooseInclude').style.display = 'none'
    }

    removeChip( deletedChip ){
    	console.log(deletedChip)
    	this.closeMenu()
    	for(var i = 0; i < this.state.chipList.length; i++) {
	    	if(this.state.chipList[i].key == deletedChip) {
		        this.state.chipList.splice(i, 1);
		        break;
	   		 }
		}
    	this.setState({chipList: this.state.chipList})
    }

    showMenu( key ){

		    if(document.getElementById(key).style.display === 'none'){
		      document.getElementById(key).style.display = 'block'
		    }
		    else if(document.getElementById(key).style.display == 'block') {
		    	document.getElementById(key).style.display = ' none '
		    }
		    	this.closeMenu( key )  	

    }

    menuClick( wordClicked, keyClicked, flagged){
    	for(var i = 0; i < suggestions.length; i++){
    		if(suggestions[i].key == keyClicked){
    			suggestions[i].flagged = !suggestions[i].flagged;    			
    		}
    		this.setState({chipList: this.state.chipList})
    	}

    	for(var i = 0; i < this.state.addWords.length; i++){
    		if(wordClicked === this.state.addWords[i]){
    			this.state.addWords.splice(i, 1)
    			if(this.state.addWords.length == 0){
    				document.getElementById('chooseInclude').style.display = 'none'
    			}
    			return
    		}
    		  				
    	}
    	this.state.addWords.push( wordClicked )
    	if(this.state.addWords.length > 0){
    		document.getElementById('chooseInclude').style.display = 'block'
    	}
    }

    addToPill( sentKey ){
    	
    	for(var i = 0; i < this.state.chipList.length; i++){
    		if(this.state.chipList[i].key == sentKey){
    			if(this.state.addWords == ''){return}
    			else{
    				for(var n=0; n < this.state.addWords.length; n++){
			    		this.state.chipList[i].label.push(this.state.addWords[n])
			    	}
			    		this.closeMenu()
			    		this.state.addWords = []
			    		this.setState({chipList: this.state.chipList})
	    		}
	   		 }
		}

		for(var i = 0; i < suggestions.length ; i++){
			if(suggestions[i].added == true){suggestions.shift()}
			suggestions[i].flagged = false
		}
    }

    addTypedWord( wordToAdd ){
    	suggestions.unshift({key:suggestions.length, word: wordToAdd, flagged: true, added: true})
    	this.state.addWords.push( wordToAdd )
    	this.setState({searchText: ""})
      	this.setState({chipList: this.state.chipList})
      	
    }


    handleUpdate(e){
    	this.setState({searchText:e})
    }

    closeMenu( key ){
    	for(var i=0; i < this.state.chipList.length; i ++){
    		if(document.getElementById(this.state.chipList[i].key).style.display = 'none' && this.state.chipList[i].key == key){continue}
    		document.getElementById(this.state.chipList[i].key).style.display = 'none'
    	}
    	this.setState({display:'none'})
    }

    handleTextAreaClick(){
    	this.closeMenu()
    	if(this.state.chipList.length > 0 && this.state.display == 'none'){
    		this.setState({display:'block'})
    	}
    	else{this.setState({display:'none'})}

    }

	  capture(e){
	  	if(e.keyCode == 13) {
	  		if( this.state.chipList.length > 0 ){
	  			var newText=document.getElementById('myText').value
	  			e.preventDefault()
	  			if(newText == '' || newText == ' '){return}
	  			else{
	  				document.getElementById('includeExclude').style.display = 'block'
  				}
  			  }
  			  else{
  			  	e.preventDefault()
  			  	document.getElementById('myText').blur()
		  		this.include()
		  		}
	  		this.closeMenu()
		}
	   	 
	   	 else if(e.keyCode == 8 && document.getElementById('myText').value == ''){

	  		this.state.chipList.pop()
	  		this.setState({chipList: this.state.chipList})
	  		if(this.state.chipList.length == 0){this.closeMenu()}
	  	}

	  }


	  includeClick(){
	  	for(var i=0; i < this.state.addWords.length; i++){
	  		this.chipify(this.state.addWords[i], 'include')
	  	}

		for(var i = 0; i < suggestions.length ; i++){
			suggestions[i].flagged = false
		}
	  	this.state.addWords = []
	  	 this.setState({display:'none'})
	  }
	
		excludeClick(){
		  	for(var i=0; i < this.state.addWords.length; i++){
		  		this.chipify(this.state.addWords[i], 'exclude')
		  	}


			for(var i = 0; i < suggestions.length ; i++){
				suggestions[i].flagged = false
			}
			  this.state.addWords = []
			  this.setState({display:'none'})
		  }

	  include(){
	  	this.chipify(document.getElementById('myText').value, 'include')
	  	document.getElementById('myText').value =''
	  	document.getElementById('includeExclude').style.display = 'none'
	  }

	  exclude(){
	  	this.chipify(document.getElementById('myText').value, 'exclude')
	  	document.getElementById('myText').value =''
	  	document.getElementById('includeExclude').style.display = 'none'
	  	
	  }

	render(){
		return(
			<div>
				<NavBar></NavBar>
				<WelcomeMessage chips={this.state.chipList}></WelcomeMessage>
				<SearchField 
					addTypedWord={this.addTypedWord} 
					closeMenu={this.closeMenu} 
					exclude={this.exclude} 
					include={this.include} 
					capture={this.capture} 
					chips={this.state.chipList} 
					showMenu={this.showMenu} 
					menuClick={this.menuClick} 
					addToPill={this.addToPill} 
					chipify={this.chipify} 
					removeChip={this.removeChip}
					suggestions={suggestions}
					searchText={this.state.searchText}
					handleUpdate={this.handleUpdate}
					handleTextAreaClick={this.handleTextAreaClick}
					display={this.state.display}
					includeClick={this.includeClick}
					excludeClick={this.excludeClick}
				>
				</SearchField>
				<DataImage 
					chips={this.state.chipList} 
					added={this.state.added} 
					closeMenu={this.closeMenu}
				>
				</DataImage>	
			</div>
		)
	}
};

var mainDiv = <MainDiv/>

ReactDom.render(mainDiv, document.getElementById('main'));























