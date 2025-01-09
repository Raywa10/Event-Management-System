import React from 'react';
// import All from './All.css';
import Navbar from './Navbar';

const Service=()=>{
    return(
        <section className="services" id="services">
  <div className="container">
    <div className="main-text">
      <h1><span>S</span>ervices</h1>
    </div>
    <div className="row">
      
      <div className="col-md-4 py-3 py-md-0">
            
        <div className="card">
          <i className="fas fa-hotel"></i>
          <div className="card-body">
          <h3>Affordable Resort</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cum. Lorem ipsum dolor sit amet.
          </p>
          <input type="button" value="Learn more" id="btn-ser"/>
        </div>
        </div>
       </div>
    
    <div className="col-md-4 py-3 py-md-0">
            
      <div className="card">
        <i className="fas fa-video-camera"></i>
        <div className="card-body">
        <h3>All Decoration Available</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cum.
          Lorem ipsum dolor sit amet.
        </p>
        <input type="button" value="Learn more" id="btn-ser"/>
      </div>
     </div>
  </div>
  <div className="col-md-4 py-3 py-md-0">
            
    <div className="card">
      <i className="fas fa-utensils"></i>
      <div className="card-body">
      <h3>All Dishes Available</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cum.
        Lorem ipsum dolor sit amet.
      </p>
      <input type="button" value="Learn more" id="btn-ser"/>
    </div>
    </div>
   </div>

<div className="col-md-4 py-3 py-md-0">
            
  <div className="card">
    <i className="fas fa-automobile"></i>
    <div className="card-body">
    <h3>Royale Cars Services Book</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cum.
    </p>
    <input type="button" value="Learn more" id="btn-ser"/>
  </div>
  </div>
</div>
<div className="col-md-4 py-3 py-md-0">
            
<div className="card">
  <i className="fa fa-plane"></i>
  <div className="card-body">
  <h3>Aeroplane Services Available</h3>
  <p>If You Want Aeroplane And Helicopter Services so we can provide it but 
  </p>
  <input type="button" value="Learn more" id="btn-ser"/>
</div>
</div>
</div>
<div className="col-md-4 py-3 py-md-0">
            
<div className="card">
  <i className="fas fa-utensils"></i>
  <div className="card-body">
  <h3>All Dishes Available</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cum.
 
  </p>
  <input type="button" value="Learn more" id="btn-ser"/>
</div>
</div>
</div>
</div>
</div>
</section>
    );
};
export default Service;