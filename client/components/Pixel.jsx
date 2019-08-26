import React from 'React'

class Pixel extends React.Component {
  state = {style: { 
    width: "20px",
    height: "20px",  
    backgroundColor: "blue" 
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <div style={this.state.style}></div>
      </React.Fragment>
    )
  }
}

export default Pixel