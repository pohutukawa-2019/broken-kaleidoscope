import React from 'react'
import { genericTypeAnnotation } from '@babel/types';

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`




class Pixel extends React.Component {
   
  state = {
    style: {
      backgroundColor: randomHexColor(),
      height: "3px",
      width: "3px"
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        height: "3px",
        width: "3px"
      }
    })
  }

  mouseOverHandler = evt => {
    this.setState({
      style: {
        backgroundColor: "green",
        height: "3px",
        width: "3px"
      }
    })
  }

  contextMenuHandler = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        backgroundColor: "black",
        height: "3px",
        width: "3px"
      }
    })
  }

  doubleClickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: "white",
        height: "3px",
        width: "3px"
      }
    })
  }

  dragEnterHandler = evt => {
    this.setState({
      style: {
        backgroundColor: "yellow",
        height: "3px",
        width: "3px"
      }
    })
  }

  // changeColour = evt => {
  //   this.setState({
  //     style: {
  //       backgroundColor: randomHexColor(),
  //       height: "3px",
  //       width: "3px"
  //     }
  //   }
  //   )
  // }

    // setInterval(this.setState.changeColour, 1000)

  // setInterval(() => {
  //   this.setState({
  //     style: {
  //       backgroundColor: randomHexColor(),
  //       height: "3px",
  //       width: "3px"
  //     }
  //   }
  // }, 1000)


  render () {
    return (
      <div 
        style = {this.state.style} 
        onClick = {this.clickHandler} 
        onMouseEnter = {this.mouseOverHandler} 
        onContextMenu = {this.contextMenuHandler} 
        onDoubleClick = {this.doubleClickHandler}
        onDragEnter = {this.dragEnterHandler}
        // onLoad = {this.setInterval}
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


