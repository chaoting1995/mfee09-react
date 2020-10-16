import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <>
      <MyNavbar />
      <MainContent>
      <main className="flex-shrink-0">
        <div className="container">
        <MainContent/>
          <TodoApp />
        </div>
      </main>
      {/* 上下夾的元件，以前通常是為了改變被夾住子女元件的屬性，後來官方出了HOC(高階元件的樣式) */}
      <MyFooter />
    </>
  )
}

export default App
