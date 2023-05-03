import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [geolocation, setgeolocation] = useState("")

    const handlesubmit = () => {
        const payload = {
            name,
            email,
            password,
            geolocation
        }
        console.log(payload)
        fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then((res) => {
                res.json()
                alert("Sucess")
            })
            .then((res) => console.log(res))



    }



    return (
        <>
            <div className='container'>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            name="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                            name="geolocation" value={geolocation}
                            onChange={(e) => setgeolocation(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}

export default Signup
