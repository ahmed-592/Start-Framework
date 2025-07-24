import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import NotFounded from './Components/NotFounded/NotFounded'


 let routering = createBrowserRouter([
  {path: "/" , element: <Layout/> , children:[
    
    {index:true , element: <Home/>},
    {path: "/about" , element: <About/>},
    {path: "/portfolio" , element: <Portfolio/>},
    {path: "/contact" , element: <Contact/>},
    {path: "*" , element: <NotFounded/>},
  ]}
])

function App() {
  

  return (
    <>
     <RouterProvider router={routering}></RouterProvider>
    </>
  )
}

export default App
