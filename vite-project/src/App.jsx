import { useState } from 'react'
import './App.css'
import TodosList from './TodosList'
import Input from './Input'

function App() {

  return (
    <>
      <div className='main_div'>
        <h1>ToDo</h1>
        {/* <Input /> */}
        <TodosList />
      </div>
    </>
  )
}

export default App
