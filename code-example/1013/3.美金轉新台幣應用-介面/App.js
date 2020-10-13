// 導入其它的模組
import React, { useState } from 'react'

function App(props) {
  const [twd, setTwd] = useState(0)
  const [usd, setUsd] = useState(0)

  return (
    <>
      新台幣：
      <input
        type="text"
        value={twd}
        onChange={(event) => setTwd(event.target.value)}
      />
      <br />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(event) => setUsd(event.target.value)}
      />
    </>
  )
}

// 輸出元件(函式)
export default App
