import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    const randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = { style: { backgroundColor: `${randomHexColor()}`, width: '50px', height: '50px' } }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler}> </div>
    )
  }
}

// const Pixel = () => {
//   return (
//     <div style={{ backgroundColor: 'blue', width: '50px', height: '50px' }}> </div>
//   )
// }

export default Pixel
