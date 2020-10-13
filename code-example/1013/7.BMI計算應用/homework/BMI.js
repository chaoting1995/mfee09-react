import React, { useState } from 'react'

function BMI(props) {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')

  const calcBMI = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0

  return (
    <>
      你目前的身高（公分）：
      <br />
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      你目前的體重（公斤）：
      <br />
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <button onClick={() => setBmi(calcBMI(+height, +weight))}>計算</button>
      <br />
      BMI：{bmi}
    </>
  )
}

export default BMI
