import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const subNumber = () => {
        setCounter(counter - 1)
    }

    function addNumber() {
        setCounter(counter + 1)
    }

    

    return (
    <div>
        <h1>{counter}</h1>
        <button onClick={addNumber}>Adicionar</button>
        <button onClick={subNumber}>Subtrair</button>
    </div>
  )
}

export default Counter