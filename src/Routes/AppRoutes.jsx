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
import TourismSpot from "../Pages/TourismSpot";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>,
            loader:()=>fetch('http://localhost:5000/add-tourist-spot')
        },
        {
            path:"/add-tourist-spot",
            element:<PrivateRoute>
                <AddTouristSpot/>
            </PrivateRoute>
        },
        {
            path:"/all-tourist-spots",
            element:<AllTouristSpots/>
        },
        {
            path:"/my-list",
            element:<PrivateRoute>
                <MyList/>
            </PrivateRoute>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/tourismspot/:spotId",
            element:<PrivateRoute>
                <TourismSpot/>
            </PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/tourism-spot/${params.spotId}`)
        }
    ]
    },
  ]);
export default router;