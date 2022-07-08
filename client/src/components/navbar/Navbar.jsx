import "./navbar.css"
import {Link, useNavigate }from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Navbar = () => {
  const {user,dispatch}=useContext(AuthContext);

  const navigate =useNavigate();
  const handleClick=()=>{
    navigate("/login");
  }
  const handleLogout=async ()=>{
    await axios.post("http://localhost:8800/auth/logout");
    dispatch({ type: "LOGOUT" });
    navigate("/")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to ="/" style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">BansalBooking</span>
        </Link>
        {user ?(<div className="navItems">
        <button className="navButton" onClick={handleLogout}>Logout</button>
        </div>) :( 
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleClick}>Login</button>
          
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Navbar