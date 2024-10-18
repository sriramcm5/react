import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Dashboard from './Dashboard';
import Spreadoperator from './Spreadoperator';
import Ternaryoperator from './Ternaryoperator';
import Jk from './Jk';
import Headfoot from './Headfoot';
import IncreDecre from './IncreDecre';
import  Form from './Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
