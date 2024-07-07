import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos } = props

  return (
    <ul className='container column is-half px-6'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p className='has-text-weight-bold'>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
