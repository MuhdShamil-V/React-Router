import React, { useContext, useRef } from 'react'
import { myContext } from '../App'
import { useNavigate } from 'react-router-dom';
import './signup.css';




function Signup() {

    const navigate = useNavigate();

    const {user} = useContext(myContext)

    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = () => {
        const userName = nameRef.current.value;
        const password = passwordRef.current.value;

        if(userName === '' || password === ''){
            alert('pls Enter a valid Username and Password')
        }else{

        nameRef.current.value = '';
        passwordRef.current.value = '';

        navigate('/login')
    }
}
  return (
    <div className="signup-container">
    <input type='text' placeholder='username' ref={nameRef} />
    <input type='password' placeholder='password' ref={passwordRef} />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signup