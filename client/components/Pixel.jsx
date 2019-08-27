import React from 'react'

class Pixel extends React.Component {
  randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  state = {
    style: {
      height: 3,
      width: 3,
      backgroundColor: this.randomHexColor()
    }
  }

  render () {
    return (
      <React.Fragment>
        <div style={this.state.style}></div>
      </React.Fragment>
    )
  }
}

export default Pixel
