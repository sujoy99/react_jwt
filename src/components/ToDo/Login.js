import React, {useState} from 'react'

const Login = () => {
    
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const user = {username : username, password : password}

    const login = () =>{

        console.log(user)

        fetch("http://localhost:99/authenticate",{
            method : 'POST',
            headers : {
                "content-type": "application/json"
            },
            body : JSON.stringify(user)
        })
        .then( (response)=>response.json() )
        .then((data)=>{
            // console.log(JSON.parse(data))

            localStorage.setItem("user", JSON.stringify(data))
        })
    }


    return (
        <>
            <span>Username :</span>
            <input type="text" value={username} onChange={ (e)=>{ setUsername(e.target.value) }}/>

            <span>Password :</span>
            <input type="text" value={password} onChange={ (e)=>{ setPassword(e.target.value) }}/>

            <button onClick={()=>{ login() }} >Login</button>
        </>
    )
}

export default Login
 

