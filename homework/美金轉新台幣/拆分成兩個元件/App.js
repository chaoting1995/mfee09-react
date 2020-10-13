// 導入其它的模組
import React, { useState } from 'react'
import MoneyInput from './components/MoneyInput'

function App(props) {
  const [twd, setTwd] = useState(0)
  const [usd, setUsd] = useState(0)

  // 注意，這種數字運算會去掉小數然後四捨五入，所以不夠精準，只作範例用
  const usd2Twd = (usd) => (usd * 28.53).toFixed(2)
  const twd2Usd = (twd) => (twd > 0 ? (twd / 28.53).toFixed(2) : 0)

  return (
    <>
      {/* 寫一個子女元件重覆使用 */}
      <MoneyInput
        title="新台幣"
        money={twd}
        setMoney={(value) => {
          setTwd(value)
          setUsd(twd2Usd(value))
        }}
      />
      <br />
      <MoneyInput
        title="美金"
        money={usd}
        setMoney={(value) => {
          setUsd(value)
          setTwd(usd2Twd(value))
        }}
      />
    </>
  )
}

// 輸出元件(函式)
export default App
