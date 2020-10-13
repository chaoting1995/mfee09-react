import React, { useState } from 'react'

import MyButtonOne from './components/MyButtonOne'
import MyButtonTwo from './components/MyButtonTwo'

function App(props) {
  const [text, setText] = useState('')

  return (
    <>
      {/* <h1>0</h1> */}
      <MyButtonOne title="復活吧~" onClick={() => setShow(true)} />
      {show ? (
        <MyButtonTwo title="我不要活了" onClick={() => setShow(false)} />
      ) : (
        ''
      )}
    </>
  )
}

export default App
