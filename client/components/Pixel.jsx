/* eslint-disable no-unused-expressions */
import React from 'react'

class Pixel extends React.Component {
  state = {
    pixels: [
      ''
    ],
    newPixel: ''
  }

// randomHexColor = () => {
//   for (const i = 0; i < 1000; i++){
//   `#${Math.random().toString(16).substr(2,6)}`}
//   const div = $('<div>').css('background-color', color)
//   $('body').append(div)
//   if (!div.attr('style')) console.log(color)
// }
  randomHexColor = () =>
  `#${Math.floor(Math.random() * 10000000).toString(16).padStart(6, 0)}`

  handleChange = (event) => {
    this.setState({
      newPixel: event.target.value
    })
  }

  addPixel = () => {
    this.setState({
      pixels: [
        ...this.state.pixels,
        this.state.newPixel
      ],
      newPixel: ''
    })
  }

  render () {
    return (
      <React.Fragment>
        <ul>
          { this.state.pixels.map(pixels =>
            <li key={pixels}>{pixels}</li>
          )}
        </ul>
        <input type="text"
          name=""
          onChange={this.handleChange}
          value={this.state.newPixel}
        />
        <button onClick={this.addPixel}></button>
      </React.Fragment>
    )
  }
}

export default Pixel
