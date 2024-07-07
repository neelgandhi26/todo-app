import { useState } from "react"

export default function TodoInput(props){
    const { handleAddTodos, todoVaue, setTodoValue } = props
    return (
        <header className="is-flex is-justify-content-center mt-6 px-6 column columns is-half">
            <input className="input is-primary is-large mr-3 column is-four-fifths is-flex-grow-5" value={todoVaue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button className="button is-primary is-large column" onClick={() => {
                handleAddTodos(todoVaue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}