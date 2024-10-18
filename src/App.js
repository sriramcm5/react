import React, { useState } from 'react'

function Value() {


    const[count , setCount] = useState(0)


    const as = () => {
        setCount(count + 1)
    }
    
    
    const so = () => {
        setCount(count - 1)  
    }

    
  return (
    <div>
        <h1>value</h1>
        <h1>count : {count}</h1>
        <button onClick={as}>increase</button>
        <button onClick={so}>decrease</button>
    </div>
  )
}

export default Value