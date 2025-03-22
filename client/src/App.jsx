import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';

const App = () => {

  // useEffect(()=>{
  //   fetchData();
  // },[]);

  // async function fetchData() {
  //   const response = await axios.get("http://localhost:8000/get");
  //   console.log(response);
  // }
  const [counter, setCounter]=useState(0);
  const addValue=()=>{
    setCounter(counter+1)
  }
  const deleteValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Chai aur Abhi{counter} </h1>
    <button onClick={addValue}>Addd</button>
    <button onClick={deleteValue}>delete</button>
    </>
  )
}

export default App