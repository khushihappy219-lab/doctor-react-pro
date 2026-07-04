import React from 'react'
import { createRoot } from 'react-dom/client'

// import App from './Axios.jsx'

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Signup from './MY PROJECT/Signup';
// import Navbar from './MY PROJECT/Navbar.jsx';
// import App from "./MY PROJECT/Login.jsx"




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>,
)
