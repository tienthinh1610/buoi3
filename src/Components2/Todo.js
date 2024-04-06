import React from 'react'
import { Button } from 'reactstrap';

const Todo = (props) => {
    const { todo, removeTodo } = props
    return (
        <div className='todo'>
            <span>{todo.name}</span>
            <span><Button onClick={() => removeTodo(todo.id)}>X</Button></span>
        </div>
    )
}

export default Todo