// 導入其它的模組
import React, { useState } from 'react'

function AppFunctionPropsInit(props) {
  console.log(props)

  // 呼叫useState勾子，設定初始化值為0
  // 回傳一組getter(獲取值)和setter(設定值)陣列
  const [increment, setIncrement] = useState(0)

  // return 值即元件的 render 方法，只能有一個根元素進行render
  // 多個元件需要用<>...</>(React.Fragment)包住
  return (
    <>
      {/* JSX語法中加註解 */}
      <h1>{props.title}</h1>
      <h1>{props.initValue + increment}</h1>
      <button onClick={() => setIncrement(increment + 1)}>+1</button>
      <button onClick={() => setIncrement(increment - 1)}>-1</button>
    </>
  )
}

// 輸出元件(函式)
export default AppFunctionPropsInit
