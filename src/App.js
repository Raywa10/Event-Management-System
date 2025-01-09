import './style.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
import Price from './components/Price';
import Service from './components/Service';
// import Payment from './components/Payment';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Footer from './components/Footer';

const App=()=>{
    return(
     <div className='App'>
       <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/booking' element={<Booking/>}></Route>
            <Route path='/pricing' element={<Price/>}></Route>
            {/* <Route path='/payment' element={<Payment/>}></Route> */}
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/SignUp' element={<Signup/>}></Route>


            <Route path='/footer' element={<Footer/>}></Route>
            <Route element={<PrivateComponent />}>
        <Route path="/logout" element={<h1>Logout Product listing component</h1>}></Route>
        <Route path="/profile" element={<h1> Profile Product listing component</h1>}></Route>
        </Route>

        </Routes>
      </div>
  )
}
export default App;