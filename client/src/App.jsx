import {  useState } from "react";
import React from 'react';

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import {BrowserRouter , Routes , Route} from 'react-router-dom'

const App = () => {

  // useEffect(()=>{
  //   fetchData();
  // },[]);

  // async function fetchData() {
  //   const response = await axios.get("http://localhost:8000/get");
  //   console.log(response);
  // }
  // const [counter, setCounter]=useState(0);
  // const addValue=()=>{
  //   setCounter(counter+1)
  // }
  // const deleteValue=()=>{
  //   setCounter(counter-1)
  // }

  const[isLogin ,setLogin] = useState(false);
  return (
    // <>
    // {/* <h1>Chai aur Abhi{counter} </h1>
    // <button onClick={addValue}>Addd</button>
    // <button onClick={deleteValue}>delete</button> */}
    // {/* <Login/>
    // <Signup/> */}
    // </>
    // isLogin ?  <Login/> : <Signup/>
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App