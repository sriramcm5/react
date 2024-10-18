import React from 'react'
import './Login.scss'
import { FaCartShopping } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import Header from './Common/Header';
import Footer from './Common/Footer';
import airpods from "./Assets/png-transparent-airpods-thumbnail.png"


function Login() {
  return (
    <div>
      <Header></Header>
      <img src={airpods} width={250} height={200}></img>

      <div className='wrap'>
      <label>Hello</label>
      <h1>Welcome to scss</h1>
      <p>hgvuyhj</p>

    </div>
    <h1>hii</h1> 
    <h1 className='two'>hii</h1>
    <FaCartShopping className='cart'/> 
    <FaJava className='java' />

    <h1>hii</h1>
    <Footer></Footer>
    </div>
  )
}

export default Login