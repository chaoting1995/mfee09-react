import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'
registerLocale('zh-TW', zhTW)

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [age, setAge] = useState(0)

  // birthday(Date object)
  const calcAge = (birthday) => ~~((Date.now() - birthday) / 31557600000)

  useEffect(() => {
    console.log(typeof startDate)
    setAge(calcAge(startDate))
  }, [startDate])

  return (
    <>
      <MyNavbar />
      <main className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">範例：日期選擇，檢查是否滿18歲</h1>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            locale="zh-TW"
            onChange={(date) => setStartDate(date)}
          />
          <h2>{age < 18 ? '你未滿十八歲哦，請前往迪士尼樂園' : '滿十八歲'}</h2>
        </div>
      </main>
      <MyFooter />
    </>
  )
}

export default App
