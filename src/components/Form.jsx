import React from 'react'

const Form = () => {
  return (
    <div className='wrapper'>
        <input
        type='text'
        id='task'
        className='input'
        // onInput={(e) => setTask(e.target.value)}
        required
        autoFocus
        maxLength={60}
        placeholder='Enter Task'
        />
        <label htmlFor=''></label>
    </div>
  )
}

export default Form