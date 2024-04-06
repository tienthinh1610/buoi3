import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

const Header = (props) => {
    const { add } = props
    const [text, setText] = useState('')
    const handle_add = () => {
        add(text)
        setText('')
    }
    return (
        <div className='header'>
            <h2 >My To Do List</h2>
            <Input type="text"
                id="myInput"
                placeholder="Title..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == 'Enter' && text) {
                        handle_add()
                    }
                }}
            />
        </div>
    )
}

export default Header