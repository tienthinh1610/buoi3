import React, { useState } from 'react'
import Hook2 from './Hook2'
import FloatingLabels from './FloatingLabels'

const Hook3 = () => {
    const [check, setCheck] = useState(true)
    const handle_toggle = () => {
        setCheck(!check)
    }
    return (
        <div className={check ? "main" : "main active"}>
            <button onClick={handle_toggle}>Toggle</button>

            {
                check && (
                    <div>
                        <Hook2 />
                        <FloatingLabels />
                    </div>
                )
            }

        </div>
    )
}

export default Hook3