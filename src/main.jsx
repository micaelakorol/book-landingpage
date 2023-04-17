import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Index'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
)
