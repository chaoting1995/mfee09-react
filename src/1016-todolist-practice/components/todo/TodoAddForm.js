import React from 'react'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, todos, setTodos } = props
  //一一加props太累了，用解構賦值

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          //偵測onKeyPress事件，處理按下Enter鍵
          if (e.key === 'Enter' && e.target.value) {
            //e.target.value，有值就是真，不用另加!==''
            // 有e.target.value，才不會內容空白也送出

            const nweItem = {
              id: +new Date(),
              //為求方便，用當下時間日期微秒數來當id值
              text: e.target.value,
              completed: false,
              edited: false,
            }
            //建立一個新的todo項目

            const newTodos = [nweItem, ...todos]
            //建立新陣列，把目前文字輸入值加到newTodos陣列最前面，跟原本todos陣列合併
            //目前文字輸入值，改成新增物件值

            setTodos(newTodos)
            // 新陣列帶入狀態

            setTodoInput('')
            //清空輸入框
          }
        }}
      />
    </>
  )
}

export default TodoAddForm
