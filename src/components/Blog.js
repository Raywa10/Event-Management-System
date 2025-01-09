import react from 'react';
export default function Blog(){
    return(
        <section className="Blog" id="Blog">
  <div className="container">
    <div className="main-text">
      <h1><span>B</span>log</h1>
    </div>
    <div className="row">
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src={require("./../img/venue-4.jpg")} alt="not show card" height="230" width="350"/>
          <div className="card-body">
            <h4>Important things to keep in mind before booking mehendi artist</h4>
            <p>Important thins to keep in mind before booking mehendi artist-looking for the best bridal mehendi artist in India.</p>
          </div>
          <button id="blog-btn">Read more</button>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src={require("./../img/venue-2.jpg")} alt="not show card" height="230" width="350"/>
          <div className="card-body">
            <h4>Important things to keep in mind before booking mehendi artist</h4>
            <p>Important thins to keep in mind before booking mehendi artist-looking for the best bridal mehendi artist in India.</p>
          </div>
          <button id="blog-btn">Read more</button>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src={require("./../img/im3.jpg")} alt="not show card" height="230" width="350"/>
          <div className="card-body">
            <h4>Important things to keep in mind before booking mehendi artist</h4>
            <p>Important thins to keep in mind before booking mehendi artist-looking for the best bridal mehendi artist in India.</p>
          </div>
          <button id="blog-btn">Read more</button>
        </div>
      </div>
      </div>
      </div>
      </section>
    );
}