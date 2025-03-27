import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/common/Layout.jsx'
import { Link } from 'react-router'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Projects from './components/pages/Projects.jsx'

const errorElement = () => {
  return(
    <div className='text-red-500  justify-center container p-8 absolute top-1/4 border-2 w-3/4 left-20 md:left-80 text-center md:w-1/2 border-red-300 hover:shadow-md hover:shadow-amber-600 items-center'>
        <h1 className='md:text-3xl text-2xl text-red-950 font-extrabold'>🔍 Oops! Page Not Found (404)</h1>
        <p className='md:text-2xl text-xl font-semibold'>It looks like you've taken a wrong turn.</p>
        <p className='md:text-2xl text-[0.9rem] font-semibold mb-4'>🚀 Let’s get you back on track!</p>
        <Link to='/' className='text-white bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 rounded md:text-2xl text-[0.9rem]'>Go back to Home</Link>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    errorElement : errorElement(),
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/contact',
        element : <Contact />
      },
      {
        path : '/projects',
        element : <Projects />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
      <StrictMode>
        <App />
    </StrictMode>
  </RouterProvider>
)
