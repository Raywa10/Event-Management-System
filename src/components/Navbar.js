import { Component } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import { Link,useNavigate } from "react-router-dom";

const Navbar=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/SignUp');
    }
    
        return(
            <div>
                 { auth?
            <ul className="nav-ul">
                <li><Link to="/profile">profile</Link></li>
               <li><Link onClick={logout} to="/SignUp">Logout</Link></li>
            </ul>
            :
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Event</h1>
                
                <ul className='nav-menu'>
                {MenuItems.map((item,index)=>{
                    return(
                    <li key={index}>
                        <Link className={item.cName} to={item.url}> 
                        <i className={item.icon}></i>{item.title}
                        </Link>
                        </li>
                    );
                })}
                <button> <Link to="/login" style={{color:"white",textDecoration:"none"}}>Login</Link></button>
                <button><Link to="/SignUp" style={{color:"white",textDecoration:"none"}}>SignUp</Link></button>
                </ul>
            </nav>
    }
     </div>
           
        )
    }
export default Navbar;