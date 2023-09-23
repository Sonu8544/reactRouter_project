import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'

// const router = createBrowserRouter([
//  { 
//   Path: '/',
//   // element: <Outlet />,
//   element: <Layout />,
//   children: [{
//     path: "",
//     element: <Home />
//   },{
//     path: "about",
//     element: < About />
//   },{
//     path:"contact",
//     element: < Contact />
//   }

// ]

// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} > 
    <Route path='' element={<Home/>} /> 
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='user' element ={<User />} />
    <Route path='user/:userId' element={<User />} />
    <Route path='github' element={<Github />} />
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
