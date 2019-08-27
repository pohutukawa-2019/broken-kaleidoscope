import React from 'react'

import Pixel from './Pixel'

const App = () => {
  const pixels = new Array(100000).fill(<Pixel />)

  return (
    <React.Fragment>
      {pixels}
    </React.Fragment>
  )
}

export default App
