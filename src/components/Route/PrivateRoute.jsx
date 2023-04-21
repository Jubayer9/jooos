import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
     
    if(loading){
        return <dir>Loading...</dir>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;