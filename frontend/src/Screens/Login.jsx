import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
          'Content-Type': "application/json"
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,

      })
    })
   
     const json = await response.json()
    console.log(json)
    if (json.success) {
      alert("Enter Valid Credenitals")
    }
    if (!json.success) {
      localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/")
   }

  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={handlesubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="email" value={credentials.email}
              onChange={onChange}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"
              name="password" value={credentials.password}
              onChange={onChange}
            />
          </div>


          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className='m-3 btn btn-danger'>I am a New user</Link>
        </form>
      </div>
    </div>
  )
}

export default Login