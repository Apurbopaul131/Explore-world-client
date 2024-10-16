import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import AuthContex from './Context/AuthContex.jsx';
import './index.css';
import router from './Routes/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContex>
    <RouterProvider router={router}></RouterProvider>
    </AuthContex>
  </StrictMode>,
)
