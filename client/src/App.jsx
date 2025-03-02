import { useEffect } from "react";
import React from 'react';
import axios from 'axios';

const App = () => {

  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData() {
    const response = await axios.get("http://localhost:8000/get");
    console.log(response);
  }

  return (
    <div>App</div>
  )
}

export default App