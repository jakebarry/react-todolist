import { useState } from 'react'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import Form from './components/Form'

function App() {

  return (
    <main>
      <header>
        <h1>My ToDo App</h1>
      </header>
      <TaskItem />
      <TaskList />
      {/* <Form /> */}
    </main>
  )
}

export default App
