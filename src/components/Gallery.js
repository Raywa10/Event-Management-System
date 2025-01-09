import react from 'react';
export default function Gallery(){
    return(
    <section className="gallery" id="gallery">
  <div className="container">
    <div className="main-txt">
      <h1>Gallery</h1>
    </div>
    <div className="row">
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="card-body">
            <img src={require("./../img/im2.jpg")} alt="" width="330" height="230"/>
            </div>
       </div>
       </div>
       <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="card-body">
            <img src={require("./../img/slide1.jpg")}  alt="" height="230" width="330"/>
            </div>
            </div>
       </div>
       <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="card-body">
            <img src={require("./../img/wed.png")}  alt="" height="230" width="330"/>
            </div>
            </div>
       </div>
       <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="card-body">
            <img src={require("./../img/im3.jpg")}  alt="" height="230" width="330"/>
            </div>
            </div>
       </div>
       <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="card-body">
            <img src={require("./../img/wed.png")}  alt="" height="230" width="330"/>
            </div>
            </div>
       </div>
       <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="card-body">
            <img src={require("./../img/slide2.webp")}  alt="" height="230" width="330"/>
            </div>
       </div>
      </div>
    </div>
  </div>
</section>
    );
}