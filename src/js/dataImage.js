import React from 'react';

import images from './imageList'




class DataImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {img: ''};
  }


  chooseImage(){
    var included = []
    var excluded = []
    for(var i = 0; i < this.props.chips.length; i ++){
      if(this.props.chips[i].inOrEx == "include"){
        included.push(this.props.chips[i].label.join(''))
      }
      else if(this.props.chips[i].inOrEx == "exclude"){
        excluded.push(this.props.chips[i].label.join(''))
      }
    }

    for(var n=0; n < images.length; n++){
      if(images[n].includes.sort().toString() == included.sort().toString() && images[n].excludes.sort().toString() == excluded.sort().toString()){
        console.log('compare worked')
        this.state.img = images[n].key
        break
      }
      else{
        console.log(n)
        console.log(images[n].includes.sort().toString())
        console.log(included.sort().toString())
        console.log(images[n].excludes.sort().toString())
        console.log(excluded.sort().toString())
        this.state.img = images[0].key}
    }
  }



    render() {

    	if(this.props.chips.length > 0){
        this.chooseImage()
      	return (
        		<img style={{width: '100%', height: '600px', marginTop: '60px'}} src={this.state.img} onClick={this.props.closeMenu}/>
        		)
    	   }
      else{
        return(
          <div></div>)
        
      }
    }
}


export default DataImage;

