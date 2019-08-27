import React from 'react'
import { genericTypeAnnotation } from '@babel/types';

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
   
  state = {
    style: {
      backgroundColor: randomHexColor(),
      height: "1px",
      width: "1px"
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        height: "1px",
        width: "1px"
      }
    })
  }

  mouseOverHandler = evt => {
    this.setState({
      style: {
        backgroundColor: "green",
        height: "1px",
        width: "1px"
      }
    })
  }

  contextMenuHandler = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        backgroundColor: "black",
        height: "1px",
        width: "1px"
      }
    })
  }

  doubleClickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: "white",
        height: "1px",
        width: "1px"
      }
    })
  }

  dragEnterHandler = evt => {
    this.setState({
      style: {
        backgroundColor: "yellow",
        height: "1px",
        width: "1px"
      }
    })
  }


  render () {
    return (
      <div 
        style = {this.state.style} 
        onClick = {this.clickHandler} 
        onMouseEnter = {this.mouseOverHandler} 
        onContextMenu = {this.contextMenuHandler} 
        onDoubleClick = {this.doubleClickHandler}
        onDragEnter = {this.dragEnterHandler}
      >
      </div>
    )
  }

}

// console.log(randomHexColor())

export default Pixel

// constructor(props) {
  //   super(props)
  //   this.state = {
  //     style = {
  //       backgroundColor: "red",
  //       height: "100px",
  //       width: "100px"
  //     }
  //   }
  // }


