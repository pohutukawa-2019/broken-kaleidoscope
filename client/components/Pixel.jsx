import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    const randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = { style: { backgroundColor: `${randomHexColor()}`, width: '50px', height: '50px' } }
  }

  state = { style: {
    height: 200,
    width: 20,
    backgroundColor: 'magenta'
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
