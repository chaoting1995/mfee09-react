import React, { useState } from 'react'

function BmiInput(props) {
  return (
    <>
      {props.title}：
      <br />
      <input
        type="text"
        value={props.BmiValue}
        onChange={(e) => {
          // 轉成數字進入state中
          props.BmiValue(+e.target.value)
        }}
      />
    </>
  )
}

export default BmiInput
