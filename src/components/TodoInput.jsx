import { useState } from "react"

export default function TodoInput(props){
    const { handleAddTodos, todoVaue, setTodoValue } = props
    return (
        <header>
            <input value={todoVaue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoVaue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}