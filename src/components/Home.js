import react from 'react';
import All from './All.css';
import About from '../components/About';
import Booking from '../components/Booking';
import Price from '../components/Price';
// import Payment from '../components/Payment';
import Service from '../components/Service';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';
import Contact from '../components/Contact';   
import Footer from './../components/Footer';

function Home(){ 
    return(
      <div>
      <div className="home" id="home">
      <div className="content" >
        <h5 class="text" >Welcome to Event world</h5>
        <h1 class="h1">Event <span class="changecontent"></span>
          <br/>
        <a href="/booking" class="btn-book">Book Now</a></h1>
      </div>
      </div>
      <About/>
      <Booking/>
      <Price/>
      {/* <Payment/> */}
      <Service/>
      <Gallery/>
      <Blog/>
      <Contact/>
      <Footer/>
      </div>
    );
}
export default Home;