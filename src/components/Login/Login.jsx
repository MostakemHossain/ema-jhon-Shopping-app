import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [show,setShow]=useState(false);
        const [success,setSuccess]=useState('');
        const navigate=useNavigate();
        const location=useLocation();
        console.log(location)

        const from=location.state?.from?.pathname || '/';
    const showToastMessage = () => {
        if (success !== '') {
            toast.success(success, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

   
    const {user,signIn}= useContext(AuthContext)
    const handleSignIn=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
       
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            setSuccess('Login Successfull')
            navigate(from,{replace:true})

        })
        .catch(error=>{
            setSuccess("Password Did not match.Try Again")
        })
    }
    return (
        <div className='from-container'>
            
            <h1 className='from-title'>Login</h1>
            <form onSubmit={handleSignIn}>
                <div className='from-control'>
                    <label htmlFor="email" >
                    Email
                    </label>
                    <input type="email" name="email" id="" required placeholder='Your email' />
                    <label htmlFor="password" >
                    Password
                    </label>
                    <input type={show?"text":"password"} name="password" id="" required placeholder='Your Password' />

                    <p onClick={()=>setShow(!show)}>
                        {
                            show ? <span>HidePassword</span>: <span>Show password</span>
                        }
                    </p>
                    
                    
                </div>
                <input  onClick={showToastMessage} className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john?</small> 
            <Link to="/signup"> Create Account?</Link>
            </p>
            <ToastContainer />
        </div>
    );
};

export default Login;