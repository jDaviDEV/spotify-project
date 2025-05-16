
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import Router from './components/Routes/Router'

createRoot(document.getElementById('root')).render(

    <RouterProvider router={Router} />

)
