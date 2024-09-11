import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'



const TaskItem = () => {
  return (
    // <header>
    <div className='item'>
      <input placeholder='Enter task...' />
      <label
        htmlFor='task'
        className='label'
      />
      <button
        // className='btn'
        aria-label='Add Task'
        type='submit'
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default TaskItem