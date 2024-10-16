import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FirebaseContext } from '../Context/AuthContex';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(FirebaseContext);
    console.log(user,loading);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user){
        return children;
        
    }
    return <Navigate state={location.pathname} to={`/login`}></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children:PropTypes.node.isRequired
}