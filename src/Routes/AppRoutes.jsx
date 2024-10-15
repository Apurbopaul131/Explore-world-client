import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import AddTouristSpot from "../Pages/AddTouristSpot";
import AllTouristSpots from "../Pages/AllTouristSpots";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyList from "../Pages/MyList";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/add-tourist-spot",
            element:<AddTouristSpot/>
        },
        {
            path:"/all-tourist-spots",
            element:<AllTouristSpots/>
        },
        {
            path:"/my-list",
            element:<MyList/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
    ]
    },
  ]);
export default router;