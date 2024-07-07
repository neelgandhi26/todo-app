import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className='card is-flex' >
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {
          handleEditTodo(index)
        }}>
          <i className="fa-sharp fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
