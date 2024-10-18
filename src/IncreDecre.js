import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function IncreDecre() {

  const[value , setValue]=useState(5)
  const[lap , setLap]=useState('Hello')
  const [count , setCount] = useState(0)
 const handleIncrement = () =>{
  setCount(count+1)
 }

 const handleDecrement = () =>{
  setCount(count-1)
 }
  
  return (
    <div>
      <h1>Login</h1>

      
      <Link to= '/Dashboard'>
      <button>Go to Dashboard</button>
      </Link>
       <br />
      <label>{value}</label> 
      <h1><label>{lap}</label></h1>
      
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment </button>
      <button onClick={handleDecrement}>Decrement </button>

    </div>
        
  )
}

export default IncreDecre;