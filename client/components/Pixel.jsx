import React from 'react'

class Pixel extends React.Component {
  
  state = {
    style: {
      backgroundColor: "red",
      height: "100px",
      width: "100px"
    }
  }

render () {
  return (
    <div style = {this.state.style}></div>
  )
}

}


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


