import React from 'react'

class Pixel extends React.Component {
state = { style: {
  height: 20,
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
