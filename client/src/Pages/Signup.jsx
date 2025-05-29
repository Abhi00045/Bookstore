import React from 'react'
import { useState } from 'react'


function Signup() {
    
    const[name , setName] = useState("");
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");

    const handleSumbit = (e)=>{
        e.preventDefault();
    }

  return (
    <div className="Signup_form">
        <h1>Signup</h1>
        <form  method="post" onSubmit={handleSumbit}>
            <div className="Name">
                <label htmlFor="Name">Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="Name">
                <label htmlFor="Name">Email</label>
            <input type="email" onChange={e => setEmail(e.target.validationMessage)} />
            </div>
            <div className="Name">
                <label htmlFor="Name">password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="Name">
                <label htmlFor="Name">Upload image</label>
            <input type="file" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Signup