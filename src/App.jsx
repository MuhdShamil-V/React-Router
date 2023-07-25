
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './Component/Signup'
import { createContext, useState } from 'react'
import Login from './Component/Login';
import Home from './Component/Home';


export const myContext = createContext();

function App() {


  const [user, setUser] = useState([]);

  return (
    <>
      <div>
        <myContext.Provider value={{user, setUser}}>
        <BrowserRouter>
         <Routes>
          <Route path='/' element ={<Home /> } />
         <Route path='/signup' element={<Signup /> } />  
         <Route path='/login' element={<Login />} />
         </Routes>
        </BrowserRouter>
        </myContext.Provider>
      </div>
    </>
  )
}

export default App