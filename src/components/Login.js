import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })
    
    const collectData=async()=>{
        let data=await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
            'Content-Type':'application/json'
            }
        })
      data=await data.json();
      console.log(data)
     if(data.email)
     {
       localStorage.setItem("user",JSON.stringify(data));
       navigate('/')
     }
     else
     {
        alert("please enter the correct detail ")
     }
    }
return(
    <div>
        <h1 id="text-l">Login Page</h1>
        <div className="register">
         <input type="email" placeholder="enter the email"  className="inputbox"  value={email}   onChange={(e)=>setEmail(e.target.value)} />
         <input type="password" placeholder="enter the password" className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)} />
         <button onClick={collectData}  className="inputbox" type="button">Login</button>
    </div>
    </div>
)
}
export default Login;