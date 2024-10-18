import React from 'react'

function Spreadoperator() {

    const ori1=[1,2,3,0]

    const ori2=[5,8,7]

    const copy=[...ori1,...ori2]

    console.log(copy);

  return (
    <div>Spreadoperator</div>
  )
}

export default Spreadoperator