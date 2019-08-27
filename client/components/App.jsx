import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
  <React.Fragment>
      {Array.from({length: 50000}, () => <Pixel />)}
      {/* {console.log(Array.from({length: 10}, (el, i) => el = <Pixel />))} */}
    </React.Fragment>
  )
}

export default App