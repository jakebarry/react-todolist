import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'



const TaskItem = (props) => {

  const { handleAddTodos, todoValue, setTodoValue } = props


  return (

    // <header>
    <form className='item'>
      <input
        type='text'
        id='task'
        className='input'
        placeholder='Enter task...'
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value)
        }}
        required
        autoComplete='off'
        autoFocus
        
      />
      {/* <label
        htmlFor='task'
        className='label'
      /> */}
      <button
        // className='btn'
        aria-label='Add Task'
        type='submit'
        onClick={() => {
          if (todoValue != '')
          {
            handleAddTodos(todoValue)
            setTodoValue('')
          }
        }}
        >
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  )
}

export default TaskItem