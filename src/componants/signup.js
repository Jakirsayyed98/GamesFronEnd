import { React, useState } from "react";


const SignUp = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setmobileumber] = useState("")
    const [password, setpassword] = useState("")
    const MyValues =async () => {
        console.warn(name, email, number, password)

        var result =await fetch("http://localhost:2000/user/signup", {
            method: "POST",
            body: JSON.stringify({ name, email, number, password }),
            headers: {
                'Content-type':'application/json'
        },
        })

        result = await result.json()
        console.log(result)

    }


    return (
        <div className="SignUp">
            <h1>This is Register Page</h1>
            <ul>
                <input className="inputname" type='text' value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter Your name"></input>
                <input className="inputname" type='email' value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter Your Email"></input>
                <input className="inputname" type='number' value={number} onChange={(e) => setmobileumber(e.target.value)} placeholder="Enter Your Mobie number"></input>
                <input className="inputname" type='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Your Password"></input>

                <button className="registerbutton" type="button" onClick={MyValues}>Register</button>
            </ul>
        </div>
    )
}

export default SignUp;