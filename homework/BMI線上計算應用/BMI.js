import React, { useState } from 'react'
import BmiInput from './components/BmiInput'

function BMI(props) {
  const [height, setHeight] = useState('')
  const [weight, setWight] = useState('')
  const [bmi, setBmi] = useState('')

  // const bmi = (weight,height) => (weight / Math.pow(height*0.01 ,2)
  // 一個52公斤的人，身高是155公分，則BMI = 52(公斤) / 1.552 ( 公尺平方 )= 21.6

  const calcBMI = (h, w) =>{
    h > 0 && w > 0 ? (w / Math.pow( h /100 , 2)).toFixed(1) : 0

  return (
    <>
    你目前的身高(公分)：
      <BmiInput
        title="你目前的身高(公分)"
        bmiValue={height}
        setBmiValue={(value) => {
          setHeight(value)
        }}
      />

      <br />

      <BmiInput
        title="你目前的體重(公斤)"
        bmiValue={weight}
        setBmiValue={(value) => {
          setWight(value)
        }}
      />
      
      {/* <h1>{bmi()}
        title="身高"
        bmiValue={height}
        setBmiValue={(value) => {
          setHeight(value)
        }} */}

        <button 
        title="你目前的身高(公分)"
        onClick={() => props.setText(innerValue)}>
        </button>

    </>
  )
}

export default BMI
