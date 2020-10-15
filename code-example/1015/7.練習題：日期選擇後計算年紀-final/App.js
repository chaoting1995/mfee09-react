import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import AgeCheck from './components/AgeCheck'

function App() {
  return (
    <>
      <MyNavbar />
      <main className="flex-shrink-0">
        <div className="container">
          <AgeCheck />
        </div>
      </main>
      <MyFooter />
    </>
  )
}

export default App
