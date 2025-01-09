import react from 'react';
export default function About(){
    return(
        <section className="about" id="about">
  <div className="container">
    <div className="main-text">
      <h1>About<span> us</span></h1>
    </div>
    <div className="row" style={{margin:"50px"}}>
      <div className="col-md-6 py-3 py-md-0">
        <div className="card">
        </div>
      </div>
      <div className="col-md-6 py-3 py-md-0">
        <h2>How event work</h2>
        <p>Event management is a process of organizing a professional and focused event, for a particular target audience. It involves visualizing concepts, planning, budgeting, organizing and executing events such as wedding, musical concerts, corporate seminars, exhibitions, birthday celebrations, theme parties, etc. Event Management is a multi-million-dollar industry, growing rapidly, with events hosted regularly. Event management is the application of project management to the creation and development of large-scale events.  An event refers to a social gathering or activity, such as a festival, (for example a musical festival), a ceremony( for example a marriage ) and a party(for example a birthday party). </p>
        <button id="about-btn">Read more....</button>
        </div>
        </div>
        </div>
        </section>
    );
}