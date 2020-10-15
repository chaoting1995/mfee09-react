// 導入其它的模組
import React, { useState } from 'react'
import AppClass from './components/AppClass'
import AppFunction from './components/AppFunction'

function App(props) {
  const [live, setLive] = useState(true)

  return (
    <>
      <button onClick={() => setLive(false)}>再見</button>
      <button onClick={() => setLive(true)}>復活</button>
      <hr />
      {live && <AppFunction />}
    </>
  )
}

// 輸出元件(函式)
export default App
