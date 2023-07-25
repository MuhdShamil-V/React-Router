import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../App';

function Login() {

    const navigate = useNavigate();
    const {user} = useContext(myContext);

    const nameRef = useRef();
    const passwordRef = useRef();

   

    const handleLogin = ()=> {
        const userName = nameRef.current.value;
        const password = passwordRef.current.value;

        navigate('/');

    };

  return (
    <div>
        <input type='text' placeholder='username' ref={nameRef} />
        <input type='password' placeholder='password' ref={passwordRef}/>
        <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login