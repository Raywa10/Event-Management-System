import React,{useState} from "react";

import { Form } from "react-router-dom";
// import { Helmet } from "react-helmet";

export default function Contact(){
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[phone,setPhone]=useState("");
const[message,setMessage]=useState("");



const collectData=async()=>{
    console.log(name,email,phone,message)
    let result=await fetch(`http://localhost:5000/contact`,{
        method:'post',
        body:JSON.stringify({name,email,phone,message}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result=await result.json();
  console.log(result)
  // this is use one key
  localStorage.setItem("contacts",JSON.stringify(result))
}

return(
    <div className="container-contact">
    <h1 id="text-l">Contact us</h1>
    <div className="contact">
    {/* <Form name="myForm" onsubmit="return validation()"> */}
        <input type="text" placeholder="enter the name" name="name" className="inputbox"  value={name}  onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="enter the email" name="email" className="inputbox"  value={email}   onChange={(e)=>setEmail(e.target.value)} />
        <input type="phone" placeholder="enter the phone" name="phone" className="inputbox" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <textarea rows="3" placeholder="enter the Message" className="inputbox" value={message} onChange={(e)=>setMessage(e.target.value)}>Message</textarea>
        <button onClick={collectData}  className="inputbox" type="submit">submit</button>
        {/* </Form> */}

        {/* <Helmet>
            <script src="C:\Users\saksh\OneDrive\Desktop\event2\frontend\src\validation.js" type="text/javascript"/>
        </Helmet> */}
    </div>
    </div>
)
}










