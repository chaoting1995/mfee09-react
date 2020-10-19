import React, { useState, useEffect } from 'react'
import TodoAddForm from './todo/TodoAddForm'
import TodoList from './todo/TodoList'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '買哀鳳', completed: false, edited: false },
    { id: 2, text: '捐血換錢', completed: true, edited: false },
  ])
  // 所有資料處理統一寫在TodoApp
  //把每個代辦事項改成物件值，才能切換完成與否，completed: t/f
  //用索引值找不到項目，因為新增項目會改變順序，故加上id值
  //{id: , text: string, completed: bool edited: bool}
  // 用狀態初始值先撰寫(寫死)範例
  // 新增就要改

  const handleEditedToggle = (id) => {
    //C2：用id值找到物件，更新物件值之中edited的值
    const newTodos = [...todos]
    //複製整份陣列todos，更動完再送回去
    const todoItemIndex = newTodos.findIndex((t) => t.id === id)
    //用findIndex()方法，檢測newTodos陣列，若其id值===傳進來的id值，若找到，就會回傳陣列索引值，存入todoItemiIndex，若沒找到，回傳-1

    if (todoItemIndex !== -1) {
      //若有找到，更動帶有該id值的物件
      newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited
      //修改物件內容，原為true，就改為fales；原為fales，就改為true
      setTodos(newTodos)
      // 設定回原本的todos
    }
  }

  const handleEditedSave = (id, newText) => {
    //C2：用id值找到物件，更新物件值之中edited的值
    const newTodos = [...todos]
    //複製整份陣列todos，更動完再送回去
    const todoItemIndex = newTodos.findIndex((t) => t.id === id)
    //用findIndex()方法，檢測newTodos陣列，若其id值===傳進來的id值，若找到，就會回傳陣列索引值，存入todoItemiIndex，若沒找到，回傳-1

    if (todoItemIndex !== -1) {
      //若有找到，更動帶有該id值的物件
      newTodos[todoItemIndex].text = newText
      //修改物件內容，原為true，就改為fales；原為fales，就改為true
      setTodos(newTodos)
      // 設定回原本的todos

      // 切換回原本的狀態
      handleEditedToggle(id)
    }
  }

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

  // 建立一個新陣列，其中不包含要被移除的項目(用filter)
  const handleDelete = (id) => {
    //C2：用id值找到物件，然後移出陣列
    // const newTodos = [...todos]
    // const todoItemIndex = newTodos.findIndex((t) => t.id === id)
    // if (todoItemIndex !== -1) {
    // const newTodosFinal = []
    // //做一個空陣列，用來接被刪除之外的陣列
    // for (let i = 0; i < newTodos.length; i++) {
    //   // 用for迴圈創造新陣列
    //   if (i === todoItemIndex) {
    //     // 此迴圈的索引值等於若找到的 todoItemIndex，就不加入新陣列(排擠)
    //   } else {
    //     newTodosFinal.push(newTodos[i])
    //     //迴圈索引值不等於todoItemIndex的陣列項目，一一塞入新陣列newTodosFinal
    //   }
    // }
    // 更簡潔的語法取代上面這串
    // const newTodosFinal.filter((item,index) => index!== todoItemIndex)
    // const eewTodos = todos.filter((item, index) => index !== todoItemIndex)
    const newTodos = todos.filter((item, index) => item.id !== id)
    // filter根本不需要尋找核對，沒找到就跟newTodos一模一樣，不會做多餘變動

    // setTodos(newTodosFinal)
    setTodos(newTodos)
    // }
  }

  return (
    <>
      <h1 className="mt-5">範例：待辦事項</h1>
      <TodoAddForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
      />
      <hr />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEditedSave={handleEditedSave}
      />
    </>
  )
}

export default TodoApp
