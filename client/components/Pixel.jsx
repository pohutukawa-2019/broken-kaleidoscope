import React from 'React'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  hulkifier = () => {
    this.setState({
      style: {
        width: "20px",
        height: "20px",
        backgroundColor: "green"
      }
    })
  }

  randomiser = () => {
    setInterval(() => { this.setState({
      style: {
        width: "20px",
        height: "20px",
        backgroundColor: randomHexColor()
      }
    })}, 2000)
  }

  whiteout = () => {
    this.setState({
      style: {
        width: "20px",
        height: "20px",
        backgroundColor: "white"
      }
    })
  }

  blackout = () => {
    this.setState({
      style: {
        width: "20px",
        height: "20px",
        backgroundColor: "black"
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
        <div style={this.state.style} onDragEnter={this.whiteout} onClick={this.hulkifier} onDoubleClick={this.blackout} onMouseEnter={this.randomiser}></div>
      </React.Fragment>
    )
  }
}

export default Pixel