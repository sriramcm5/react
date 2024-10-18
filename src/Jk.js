import React, { useState } from 'react';

function Jk() {
 const [name , setName] =useState('')

 const handleSubmit = () =>{
  if (name === ''){
    alert('Please enter valid name')
  }
 }
 return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input type="text" />
      <button type="button">Submit</button>

    </form>
  </div>
 )
 }
export default Jk