import React from 'react'
import Header from './Common/Header';
import Footer from './Common/Footer';
import Luxury from "./Assets/LuxuryResort.jpg"
import Swimpool from "./Assets/Swimpool.jpg"
import r1 from "./Assets/Resort1.jpg"
import r2 from "./Assets/Resort2.jpeg"
import r3 from "./Assets/Resort3.jpeg"



function Headfoot() {
  return (
    <div>
        <Header></Header>
        <img src={Luxury} width={1290} height={90}></img>

        <div>
        

        </div>
        <img src={r1} width={350} height={125}></img>
        <img src={r2} width={350} height={125}></img>
        <img src={r3} width={350} height={125}></img>

         <div>
        <Footer></Footer>
        <img src={Swimpool} width={1290} height={90}></img>
        </div>
    </div>
    
      
    


  )
}

export default Headfoot