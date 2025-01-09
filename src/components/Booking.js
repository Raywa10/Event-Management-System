import React,{useState} from "react";
import All from './All.css';
import Navbar from './Navbar';

export default function Booking(){
const[name,setName]=useState("");
const[location,setLocation]=useState("");
const[date1,setDate1]=useState("");
const[date2,setDate2]=useState("");
const[message,setMessage]=useState("");



const collectData=async()=>{
    console.log(name,location,date1,date2,message)
    let result=await fetch(`http://localhost:5000/Booking`,{
        method:'post',
        body:JSON.stringify({name,location,date1,date2,message}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result=await result.json();
  console.log(result)
  // this is use one key
  localStorage.setItem("bookings",JSON.stringify(result))
}
    return(
        <section className="booking" id="booking">
  <div className="container">
      <div className="main-text">
     <h1><span>B</span>ooking</h1>
    </div>
    <div className="row"> 
    <div className="col-md-6 py-3 py-md-0">
      <div className="card">
  </div>
      </div>
      <div className="col-md-6 py-3 py-md-0" id="bor-book">
      <form action="#">
        
        <input type="text" className="form control" placeholder="Event Name" value={name}  onChange={(e)=>setName(e.target.value)} required/><br/><br/>
        <input type="text" className="from control" placeholder="Event Location" value={location}   onChange={(e)=>setLocation(e.target.value)} required/><br/><br/>

        <input type="date" className="form control" placeholder="Event Start Date " value={date1}  onChange={(e)=>setDate1(e.target.value)} required/><br/><br/>

        <input type="date" className="form control" placeholder="Event End Date"value={date2}  onChange={(e)=>setDate2(e.target.value)} required /><br/><br/>
        <textarea rows="3" placeholder="enter the Message" className="inputbox" value={message} onChange={(e)=>setMessage(e.target.value)}>Message</textarea>
           <button onClick={collectData}  className="inputbox" type="submit">Book now</button>
      </form>	
      </div>
    </div>
  </div>
  </section>
    );
};