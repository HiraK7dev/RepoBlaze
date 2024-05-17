import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Playground from './pages/Playground'
import Create from './pages/Create'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />
  },
  {
    path: `/playground`,
    element: <Playground />
  },
  {
    path: `/create`,
    element: <Create />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
