import React from 'react'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
function App() {

  return (
    <>
      <h1 className='text-5xl font-bold'>React with Redux-toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
