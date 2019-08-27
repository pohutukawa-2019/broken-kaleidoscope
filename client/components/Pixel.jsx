import React from 'react'

  let sizeH = '5vh'
  let sizeW = '5vw'



class Pixel extends React.Component {

// constructor(props) {
//   super(props)
//   this.state = {
//     height: '10vh', 
//     width: '10vw', 
//     backgroundColor: `${randomColor}`,
//   }
  // state = { 
  //   style: [
  //     {height: '10vh', width: '10vw', backgroundColor: `${randomColor}`},
  //   ]
//   }
  
// }

  randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


  state = { 
    style : {height: sizeH, width: sizeW, backgroundColor: `${this.randomHexColor()}`,
    }
  }
  
// ==========================================================================
// timer = () => setInterval((randomColor), 1000);

// randomColor = this.setState({
//     style: {
//       height: sizeH,
//       width: sizeW, 
//       backgroundColor: `${this.randomHexColor()}`
//   }})

randomColor = evt => {
  this.setState({
    style: {
      height: sizeH,
      width: sizeW, 
      backgroundColor: `${this.randomHexColor()}`
  }})
  setInterval(this.setState, 1000);
  }

// setInterval(function(){
//     this.setState({
//     style: {
//       height: sizeH,
//       width: sizeW, 
//       backgroundColor: `${this.randomHexColor()}`
//   }})}
// }, 1000);

// ==========================================================================
clickHandler = evt => {
  this.setState({
    
    style: {
      height: sizeH,
      width: sizeW, 
      backgroundColor: `${this.randomHexColor()}`
  }})}

makeGreen = evt => {
  this.setState({
      style: {
      height: sizeH,
      width: sizeW, 
      backgroundColor: `green`
  }})}

  makeBlack = evt => {
  this.setState({
      style: {
      height: sizeH,
      width: sizeW, 
      backgroundColor: `black`
  }})}

  makeWhite = evt => {
  this.setState({
      style: {
      height: sizeH,
      width: sizeW, 
      backgroundColor: `white`
  }})}

   makeYellow = evt => {
  this.setState({
      style: {
      height: sizeH,
      width: sizeW, 
      backgroundColor: `yellow`
  }})}

  render() {
    return (
      <React.Fragment>
      <div onLoad={this.randomColor} onDragEnter={this.makeYellow} onDoubleClick={this.makeWhite} onContextMenu={this.makeBlack} onMouseEnter={this.makeGreen} onClick={this.clickHandler} style={this.state.style}>
       
      </div>
      </React.Fragment>
    )
  }
}

export default Pixel
