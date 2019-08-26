import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    const randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = { style: { backgroundColor: `${randomHexColor()}`, width: '50px', height: '50px' } }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: `${this.randomHexColor()}`,
        width: '100px',
        height: '100px'
      }
    })
  }

  mouseEnterHandler = evt => {
    this.setState({
      style: {
        backgroundColor: 'green',
        width: '50px',
        height: '50px'
      }
    })
  }

  contextMenu = evt => {
    this.setState({
      style: {
        backgroundColor: 'black',
        width: '20px',
        height: '20px'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.mouseEnterHandler} onContextMenu={this.contextMenu}> </div>
    )
  }
}

// const Pixel = () => {
//   return (
//     <div style={{ backgroundColor: 'blue', width: '50px', height: '50px' }}> </div>
//   )
// }

export default Pixel
