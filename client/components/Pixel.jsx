import React from 'React'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  clickHandler = () => {
    this.setState({
      style: {
        width: "20px",
        height: "20px",
        backgroundColor: randomHexColor()
      }
    })
  }
  
  state = {style: { 
    width: "20px",
    height: "20px",
    backgroundColor: randomHexColor()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style={this.state.style} onClick={this.clickHandler}></div>
      </React.Fragment>
    )
  }
}

export default Pixel