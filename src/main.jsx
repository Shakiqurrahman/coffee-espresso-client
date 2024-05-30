import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Layout from './AllRoutes/layout'
import {router} from './AllRoutes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
    </QueryClientProvider>
  // </React.StrictMode>,
)
