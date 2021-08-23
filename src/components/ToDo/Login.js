import React, {useState} from 'react'
import { useHistory } from "../../../node_modules/react-router-dom/cjs/react-router-dom.min";

const Login = () => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const user = {username : username, password : password}

    const login = () =>{

        console.log(user)

        fetch("http://192.168.0.4:24/authenticate",{
            method : 'POST',
            headers : {
                "content-type": "application/json"
            },
            body : JSON.stringify(user)
        })
        .then( (response)=> response.json())
        .then((data)=>{
            console.log(data)


            localStorage.setItem("user", JSON.stringify(data))

            if(data){
                console.log("ok");
                useHistory.push("/toDo");
            }
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
 

