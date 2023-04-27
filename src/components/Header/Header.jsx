import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(result=>{})
        .catch()
    }
    return (
        <div className='header'>
           
           
            
                <img src={logo} alt="" />
            

            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                {
                    user && <span className='user'>{user.email} <button onClick={handleLogOut}> SignOut</button></span>
                }
            </div>
           </div>
        
    );
};

export default Header;