// 導入其它的模組
import React, { useState } from 'react'

function MyButtonTwo(props) {
  return (
    <>
      <button onClick={props.onClick}>{props.title}</button>
    </>
  )
}

// 輸出元件(函式)
export default MyButtonTwo