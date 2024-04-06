import React, { useEffect, useState } from 'react'
import Header from './Header'
import Todo from './Todo'

const List = () => {
    const [arr, setArr] = useState([
        {
            id: 1,
            name: "hit the gym"
        },
        {
            id: 2,
            name: "go to school"
        },
        {
            id: 3,
            name: "drinking milk"
        },
        {
            id: 4,
            name: "eat Chicken"
        },
        {
            id: 5,
            name: "Play Soccer"
        },

    ])
    useEffect(() => {
        setArr(JSON.parse(localStorage.getItem("arr")))
    })
    const removeTodo = (idToRemove) => {
        setArr(arr.filter(todo => todo.id != idToRemove));
        localStorage.setItem("arr", JSON.stringify(arr.filter(todo => todo.id != idToRemove)))
    };
    const addTodo = (newTodoName) => {
        if (arr.length > 0) {
            setArr([...arr, { id: arr[arr.length - 1].id + 1, name: newTodoName }])
            localStorage.setItem("arr", JSON.stringify([...arr, { id: arr[arr.length - 1].id + 1, name: newTodoName }]))
        } else {
            setArr([...arr, { id: 1, name: newTodoName }])
            localStorage.setItem("arr", JSON.stringify([...arr, { id: 1, name: newTodoName }]))
        }
    };
    return (
        <div className='contain'>
            <Header add={addTodo} />
            <div className='list'>
                {
                    arr.map((item, index) => (
                        <Todo todo={item} key={index} removeTodo={removeTodo} />
                    ))
                }
            </div>
        </div>
    )
}

export default List