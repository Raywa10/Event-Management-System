import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Signup=()=>{
const[name,setName]=useState("");
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
    console.log(name,email,password)
    let result=await fetch(`http://localhost:5000/register`,{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result=await result.json();
  console.log(result)
  // this is use one key
  localStorage.setItem("user",JSON.stringify(result))
  if(result)
  {
    navigate('/')
  }
}

return(
    <div>
    <h1 id="text-l">SignUp</h1>
    <div className="register">
        <input type="text" placeholder="enter the name" className="inputbox"  value={name}  onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="enter the email"  className="inputbox"  value={email}   onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="enter the password" className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={collectData}  className="inputbox" type="button">SignUp</button>
    </div>
    </div>
)
}
export default Signup;