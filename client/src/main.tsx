import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Components/Login.tsx'
import Register from './Components/Register.tsx'
import Home from './Components/Home.tsx'
import Game from './Components/Game.tsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/game",
        element: <Game/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={route}/>
)
