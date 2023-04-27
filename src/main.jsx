import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import cartProductsLoders from './Loders/CartProductLoders';
import Checkout from './components/Checkout/Checkout';
import Signup from './components/Signup/Signup';
import AuthProvider from './providers/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/checkout',
        element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>

      },
      {
        path:'/orders',
        element:<Orders></Orders>,
        loader: cartProductsLoders
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
