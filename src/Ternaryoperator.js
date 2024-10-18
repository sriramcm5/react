import React, { useState } from 'react'

function Ternaryoperator() {

    const[age,setAge]=useState(17)

    
  return (
    <div>

        <h1>Age:{age}</h1>
        {age >=18 ?

        <h1>You are OK to vote</h1>
        :
        <h1>You are NOT OK to vote</h1>
    
    
    }
     </div>
  )
}

export default Ternaryoperator