import {  useState } from "react";
import React from 'react';

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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
    isLogin ?  <Login/> : <Signup/>
  )
}

export default App