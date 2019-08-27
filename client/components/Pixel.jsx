import React, { useState, useEffect } from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { style: { backgroundColor: `${this.randomHexColor()}`, width: '50px', height: '50px' } }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: `${this.randomHexColor()}`,
        width: '50px',
        height: '50px'
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
        width: '50px',
        height: '50px'
      }
    })
  }

  doubleClick = evt => {
    this.setState({
      style: {
        backgroundColor: 'white',
        width: '50px',
        height: '50px'
      }
    })
  }

  dragEnter = evt => {
    this.setState({
      style: {
        backgroundColor: 'yellow',
        width: '50px',
        height: '50px'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} 
        onClick={this.clickHandler} 
        onMouseEnter={this.mouseEnterHandler} 
        onContextMenu={this.contextMenu} 
        onDoubleClick={this.doubleClick}
        onDragEnter={this.dragEnter}
      > </div>
    )
  }
}

// const Pixel = () => {
//   return (
//     <div style={{ backgroundColor: 'blue', width: '50px', height: '50px' }}> </div>
//   )
// }

export default Pixel
