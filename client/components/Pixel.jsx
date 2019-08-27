import React from 'react'

class Pixel extends React.Component {
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  
  state = {
    style: { 
      height: 50,  
      width: 50, 
      backgroundColor: this.randomHexColor()
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
       height: this.state.style.height,
       width: this.state.style.width,
        backgroundColor: this.randomHexColor()
      }
    }
    )
  }



  render () {
   return (
    <React.Fragment>
      <div style={this.state.style}
          onMouseEnter={this.clickHandler}></div>

    </React.Fragment>
  )}

}

export default Pixel
