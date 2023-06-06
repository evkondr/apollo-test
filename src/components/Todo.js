import React from 'react'

const Todo = ({id, title, compleated}) => {
  return (
    <div className="todo">
      <div className="todo__title">
        {title}
      </div>
      <div className="compleated">
        <input type="checkbox" />
      </div>
    </div>
  )
}

export default Todo