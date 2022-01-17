import React from 'react'
import "./Signin.css"

const Signin = () => {
    return (
        <div className='signin'>
            <form action=''>
            <h1>Sign in</h1>
            <input type="email" />
            <input type="password" />
            <button>Sign In</button>
            <h6>Not yet register<span>Sign Up</span></h6>


            </form>
        
        </div>
    )
}

export default Signin
