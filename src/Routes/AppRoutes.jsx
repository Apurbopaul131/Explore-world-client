import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import AddTouristSpot from "../Pages/AddTouristSpot";
import AllTouristSpots from "../Pages/AllTouristSpots";
import EditSpotInfo from "../Pages/EditSpotInfo";
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
            element:<AllTouristSpots/>,
            loader:()=>fetch('http://localhost:5000/all-tourist-spots')
        },
        {
            path:"/my-list/:emailId",
            element:<PrivateRoute>
                <MyList/>
            </PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/user/${params.emailId}`)
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
        },
        {
            path:"/edit/:spotId",
            element:<EditSpotInfo/>
        }
    ]
    },
  ]);
export default router;