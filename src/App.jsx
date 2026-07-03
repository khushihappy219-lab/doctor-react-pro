import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './MY PROJECT/Login'
import Signup from './MY PROJECT/Signup'
import Home from './MY PROJECT/Home'
import About from './MY PROJECT/About'
import Layout from './MY PROJECT/Layout'
import Doctors from './MY PROJECT/Doctors'
import Appointments from './MY PROJECT/Appointments'
import Contact from './MY PROJECT/Contact'


const App = () => {
  return (
   <Routes>
    {/* <Route index element ={<Home/>}/> */}
       {/* <Route index element={<Signup />} /> */}

       <Route path='/' element={ <Layout/>}>
       <Route index element={<Home />} />
       <Route path='/home' element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/appointments' element={<Appointments/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
      </Routes>
      
      
    
  )
}

export default App