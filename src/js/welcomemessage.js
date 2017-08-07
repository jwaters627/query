import React from 'react';


class WelcomeMessage extends React.Component {
  


  render() {

    if(this.props.chips.length === 0){
      return (
        <div style={{marginBottom: '140px'}}>
          <h1 style={{color: '#ed7d34', textAlign: 'center', marginTop: '50px', fontFamily:"Open Sans", fontWeight: '100', fontSize: "80px"}}>Discover Insights</h1>
          <h4 style={{textAlign: 'center', color: "#78797c", marginTop: '-50px', fontFamily:"Open Sans", fontWeight: '100', fontSize: "20px"}}>Search for a brand, product, event, person or subject of interest.</h4>
        </div>
          )
    }
    else{
      return(
        <div></div>
        )
      
  }
    }
    }

 



export default WelcomeMessage;




























