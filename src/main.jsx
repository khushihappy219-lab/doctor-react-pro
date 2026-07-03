import React from 'react'
import { createRoot } from 'react-dom/client'
import "./MY PROJECT/Signup.css";
// import App from './Axios.jsx'
import App from "./MY PROJECT/App.jsx";
import { BrowserRouter } from 'react-router-dom';
// import Navbar from './MY PROJECT/Navbar.jsx';
// import App from "./MY PROJECT/Login.jsx"




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>,
)
