import React from 'react'
import TaskCard from './TaskCard'

const TaskList = (props) => {
  const { todos } = props



  return (
    <ul className='todoList'>
      {todos.map((todo, todoIndex) => {
        return (
          <TaskCard {...props} todo={todo} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TaskCard>
        )
      })}
    </ul>
  )
}

export default TaskList