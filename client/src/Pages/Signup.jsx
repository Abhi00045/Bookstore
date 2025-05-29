import React from 'react'

function Signup() {
    
  return (
    <div className="Signup_form">
        <h1>Signup</h1>
        <form action="" method="post">
            <div className="Name">
                <label htmlFor="Name">Name</label>
            <input type="text" />
            </div>
            <div className="Name">
                <label htmlFor="Name">Email</label>
            <input type="email" />
            </div>
            <div className="Name">
                <label htmlFor="Name">password</label>
            <input type="password" />
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