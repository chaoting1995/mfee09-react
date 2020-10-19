import React from 'react'

function TodoItem(props) {
  const {
    text,
    completed,
    completedMethod,
    deleteMethod,
    editedToggleMethod,
  } = props
  // 解構賦值的語法，先把要用的變數值從props解出來
  return (
    <>
      <li>
        <input type="checkbox" checked={completed} onChange={completedMethod} />
        {completed ? <del>{text}</del> : text}
        {/* 用completed來判斷是否要有刪除線，true則要有 */}

        <button onClick={editedToggleMethod}>編輯</button>
        {/* 編輯功能，就是狀態控制：按編輯，進入編輯狀態/按完成，進入編輯狀態 */}
        <button onClick={deleteMethod}>刪除</button>
      </li>
    </>
  )
}

export default TodoItem

// 如果是完成狀態，有刪除線，如果不是完成狀態，沒刪除線
// item.completed ? (
//     <li key={item.text}>
//       <input
//         type="checkbox"
//         checked={item.completed}
//         onChange={() => handleCompleted(item.id)}
//       />
//       <del>{item.text}</del>
//       <button onClick={() => handleDelete(item.id)}>刪除</button>
//     </li>
//   ) : (
//     <li key={item.text}>
//       <input
//         type="checkbox"
//         checked={item.completed}
//         onChange={() => handleCompleted(item.id)}
//       />
//       {item.text}
//     </li>
//   )
