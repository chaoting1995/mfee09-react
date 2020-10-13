// 導入其它的模組
import React, { useState } from 'react'

// 導入要使用的元件程式，注意路徑要正確，不需要加副檔名
import AppClassPropsInit from './components/AppClassPropsInit'
import AppFunctionPropsInit from './components/AppFunctionPropsInit'

function App() {
  const [num, setNum] = useState(0)

  return (
    <>
      {/* 使用類似HTML標記的方式來放置元件要呈現(渲染)的位置 */}
      {/* 使用類似HTML給定屬性值的方式來傳遞資料到子女元件中 */}
      <AppClassPropsInit title="類別型元件" initValue={num} />

      <AppFunctionPropsInit title="函式型元件" initValue={num} />

      <button onClick={() => setNum(10)}>更動基本數字為10</button>
      <button onClick={() => setNum(100)}>更動基本數字為100</button>
      <button onClick={() => setNum(1000)}>更動基本數字為1000</button>
    </>
  )
}

// 輸出元件(函式)
export default App
