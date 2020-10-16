import React, { useState, useEffect } from 'react'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '買哀鳳', completed: false },
    { id: 2, text: '捐血換錢', completed: false },
  ])
  //把每個代辦事項改成物件值，才能切換完成與否，completed: t/f
  //用索引值找不到項目，因為新增項目會改變順序，故加上id值
  //{id: , text: string, completed: bool }

  const handleCompleted = (id) => {
    //C2：用id值找到物件，更新物件值之中completed的值
    //然而不能在todos裡面直接更動狀態，必須透過呼叫setState
    //故先複製陣列，修改複製版，完了再用setState設定回去
    const newTodos = [...todos]
    //複製整份陣列todos，更動完再送回去
    const todoItemIndex = newTodos.findIndex((t) => t.id === id)
    //用findIndex()方法，檢測newTodos陣列，若其id值===傳進來的id值，若找到，就會回傳陣列索引值，存入todoItemiIndex，若沒找到，回傳-1

    if (todoItemIndex !== -1) {
      //若有找到，更動帶有該id值的物件
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      //修改物件內容，原為true，就改為fales；原為fales，就改為true
      setTodos(newTodos)
      // 設定回原本的todos
    }
  }

  const handleDelete = (id) => {
    //C2：用id值找到物件，然後移出陣列
    const newTodos = [...todos]
    const todoItemIndex = newTodos.findIndex((t) => t.id === id)
    if (todoItemIndex !== -1) {
      const newTodosFinal = []
      //做一個空陣列，用來接被刪除之外的陣列
      for (let i = 0; i < newTodos.length; i++) {
        if (i === todoItemIndex) {
          // 此迴圈的索引值等於若找到的 todoItemIndex，就不加入新陣列(排擠)
        } else {
          newTodosFinal.push(newTodos[i])
          //迴圈索引值不等於todoItemIndex的陣列項目，一一塞入新陣列newTodosFinal
        }
      }
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      //修改物件內容，原為true，就改為fales；原為fales，就改為true
      setTodos(newTodos)
    }
  }

  return (
    <>
      <h1 className="mt-5">範例：待辦事項</h1>

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
      <hr />
      <ul>
        {/* map使用時通常子元素會要求唯一key值(id值)  */}
        {/* 這裡用id作為key值  */}
        {/* 依照每個項目的completed來控制呈現的樣子  */}
        {todos.map((item, index) =>
          item.completed ? (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                //勾選盒是表單設定的例外，getter設在checked，值為布林值
                onChange={() => handleCompleted(item.id)}
                //勾選盒的事件處理器，下去要切換completed的布林值
                //C1：如何找到對應項目?靠id值找
              />
              <del>{item.text}</del>
              {/* 加入流程控制，刪除線 */}
              {/* 修改 */}
            </li>
          ) : (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                //勾選盒是表單設定的例外，getter設在checked，值為布林值
                onChange={() => handleCompleted(item.id)}
                //勾選盒的事件處理器，下去要切換completed的布林值
                //C1：如何找到對應項目?靠id值找
              />
              {item.text}
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default TodoApp
