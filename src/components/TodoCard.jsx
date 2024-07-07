import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className='card is-flex is-justify-content-space-between p-5 has-background-primary-100 is-size-4'>
      {children}
      <div className=''>
        <button className='mr-3' onClick={() => {
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
