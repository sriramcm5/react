import React, { useState } from "react";
import "./Form.css";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";


const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setshowPassword] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { email: '', password: '' };
    let valid = true;
 
    if (email === "") {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (password === "") {
      newErrors.password = 'Password is required';
      valid = false;
    } 
    else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
       toast.error(newErrors.password);
    }

    setErrors(newErrors);

    if (valid) {
      if(email === "sriramcm@gmail.com"  && password === "sriram123"){
         toast.success('Form submitted successfully');
        

        setTimeout(() =>{
          window.location.href='/dashboard';
        },3000)
      } 
      else{
         toast.error('Invalid email or password');
    }
    
    }
    
  };
  const Visibility=()=> {
    setshowPassword(!showPassword)
   }

  return (
    <div className="addInput">
    <form onSubmit={handleSubmit}>
      <div className="addData"></div>
        <label>Email id:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span>{errors.email}</span>
         <br></br>
        <label>Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
          <span onClick={Visibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

  
       <span>{errors.password}</span> 
       <div />
      
      <div className="button">
      <button type="submit" class="btn btn-success">Submit</button>

      </div>
      <ToastContainer />
    </form>
    </div>
  );
};

export default Dashboard;