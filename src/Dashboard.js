import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';


function Dashbord() {

  return (
    <div>
      {/* <h1 className='content'>Dashboard</h1> */}
      <h1>Dashboard</h1>
      <Link to ='/'>
      <button>Go to Login</button>
      </Link>

   

    </div>
  )
}

export default Dashbord