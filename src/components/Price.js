import React from "react";
export default function Price(){
    return(
        <section className="Pricing" id="Pricing">
  <div className="container">
    <div className="main-text">
      <h1 id="a2">Pricing</h1>
    </div>
    <div className="row">
      <div className="col-md-4 py-3 py-md-0">
        <div className="card" >
          <img src={require("./../img/venue-1.jpg")} alt="not show card" height="230" width="350"/>
          <div className="card-body">
            <h3>Destination Wedding</h3>
            <p>Picture Yourselves in a warm, luxurious atmosphere with happy friends and family from travel time.</p>
            <div className="star">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
          <h6>Price: <strong>80000-200000</strong></h6>
          <a href="#book" id="book-btn">Book Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src={require("./../img/slide1.jpg")} alt="not show card" height="230" width="350"/>
          <div className="card-body">
            <h3>Wedding</h3>
            <p>Wedding is the most important time of the life for you, it brings a lot of responsibilites and strees as well. </p>
            <div className="star">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star  checked"></i>
              <i className="fa-solid fa-star "></i>
            </div>
          <h6>Price: <strong>80000-200000</strong></h6>
          <a href="#book" id="book-btn">Book Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src={require("./../img/im5.jpg")} alt="not show card" height="230" width="350"/>
          <div className="card-body">
            <h3>Pre Wedding Rituals</h3>
            <p> And indian wedding is a sweet conection of traditions values and rituals that are not just beautiful.</p>
            <div className="star">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
          <h6>Price: <strong>80000-200000</strong></h6>
          <a href="#book" id="book-btn">Book Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src={require("./../img/im3.jpg")} alt="not show card" height="230" width="350"/>
          <div className="card-body">
            <h3>Corporate party</h3>
            <p>A corporate event is an event sponsored by a company and focus on either its employee or clients</p>
            <div className="star">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star "></i>
            </div>
          <h6>Price: <strong>80000-200000</strong></h6>
          <a href="#book" id="book-btn">Book Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src={require("./../img/seminar.png")} alt="not show card" height="230" width="350"/>
          <div className="card-body">
            <h3>Seminar</h3>
            <p>A Seminar is a form of academic instruction, either at an academic institution or offered by a professional organization.</p>
            <div className="star">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
          <h6>Price: <strong>80000-200000</strong></h6>
          <a href="#book" id="book-btn">Book Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src={require("./../img/download.jpg")} alt="not show card"/>
          <div className="card-body">
            <h3>Birthday party</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur doloribus nam in voluptas et quis?</p>
            <div className="star">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star "></i>
            </div>
          <h6>Price: <strong>80000-200000</strong></h6>
          <a href="#book" id="book-btn">Book Now</a>
          </div>
        </div>
      </div>      
</div>
</div>
</section>
);
}
