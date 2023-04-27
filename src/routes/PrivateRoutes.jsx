import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const location=useLocation();
    console.log(location)
    const {user,Loading}=useContext(AuthContext);
    if(user){
        return children
    }

    if(Loading){
        return <div>Loading.....</div>
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;