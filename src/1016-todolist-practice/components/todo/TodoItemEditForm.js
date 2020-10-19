import React, { useState } from 'react'

function TodoItemEditForm(props) {
  //從父母曾傳過來，會變成反樣式，如果沒辦法這樣做，要提升11:53

  const { id, text, handleEditedSave } = props
  // 解構賦值的語法，先把要用的變數值從props解出來
  //沒有先經過構造過的11:58???
  const [editText, setEditText] = useState(text)

  return (
    <>
      <li>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={() => handleEditedSave(id, editText)}>儲存</button>
      </li>
    </>
  )
}

export default TodoItemEditForm
