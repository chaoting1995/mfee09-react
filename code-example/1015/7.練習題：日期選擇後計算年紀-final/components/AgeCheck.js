import React, { useState, useEffect } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'

registerLocale('zh-TW', zhTW)

function AgeCheck(props) {
  const [birth, setBirth] = useState(new Date())
  const [age, setAge] = useState(0)

  // birthday(必需是 Date 物件)
  // `~~`是轉成整數的運算子，與parseInt相似
  // 日期作加減乘除會自動轉為微秒值
  const calcAge = (birthday) => ~~((Date.now() - birthday) / 31557600000)

  // 選完日期，更動年紀
  // componentDidUpdate
  useEffect(() => {
    setAge(calcAge(birth))
  }, [birth])

  return (
    <>
      <h1 className="mt-5">範例：日期選擇，檢查是否滿18歲</h1>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={birth}
        locale="zh-TW"
        onChange={(date) => setBirth(date)}
      />
      <h2>{age < 18 ? '你未滿十八歲哦，請前往迪士尼樂園' : '滿十八歲'}</h2>
    </>
  )
}

export default AgeCheck
