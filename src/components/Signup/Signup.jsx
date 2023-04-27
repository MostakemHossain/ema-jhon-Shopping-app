import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
    const [error,setError]=useState("")
    const {createUser}= useContext(AuthContext)
   
    const showToastMessage = () => {
        if (error !== '') {
            toast.success(error, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };
   
    const handleSignUp=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        const confirm=event.target.confirm.value;
        console.log(email,password,confirm)
        setError('')
        if(password!=confirm){
            setError("Password Did Not match");
            return;

        }else if(password.length<6){
            setError('password At least 6 character');
            return;
           
        }
        
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            setError("Successfully sign in")
        })
        .catch(error=>{
            console.log(error);
            setError("Already Sign up in this email ")
        })
        
    }
    return (
        <div className='from-container'>
            <h1 className='from-title'>Signup</h1>
            <form onSubmit={handleSignUp}>
                <div className='from-control'>
                    <label htmlFor="email" >
                    Email
                    </label>
                    <input type="email" name="email" id="" required placeholder='Your email' />
                    <label htmlFor="password" >
                    Password
                    </label>
                    <input type="password" name="password" id="" required placeholder='Your Password' />
                    <label htmlFor="confirm" >
                   confirm Password
                    </label>
                    <input type="password" name="confirm" id="" required placeholder='confirm Your Password' />
                    
                    
                </div>
                <input onClick={showToastMessage} className='btn-submit' type="submit" value="Signup"  />

               
                
            </form>
           
            <ToastContainer />
            <p><small>Already have an account</small> 
            <Link to="/login"> Login?</Link>
            </p>
        </div>
    );
};

export default Signup;