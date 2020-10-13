// 導入其它的模組
import React, { useState } from 'react'

function App() {
  // 呼叫useState勾子，設定初始化值為0
  // 回傳一組getter(獲取值)和setter(設定值)陣列
  const [total, setTotal] = useState(0)

  // return 值即元件的 render 方法，只能有一個根元素進行render
  // 多個元件需要用<>...</>(React.Fragment)包住
  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          const newTotal = total + 1

          setTotal(newTotal)
          localStorage.setItem('total', newTotal)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          const newTotal = total - 1
          setTotal(newTotal)
          localStorage.setItem('total', newTotal)
        }}
      >
        -1
      </button>
    </>
  )
}

// 輸出元件(函式)
export default App
