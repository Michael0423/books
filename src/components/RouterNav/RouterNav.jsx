import './RouterNav.style.css'
import { Link } from "react-router-dom"
import logoImg from '../../asset/images/w130h50-logo.svg';

export function RouterNav() {
  return (
    <>
    <div className='header'>
      <div><img src={logoImg} alt="Logo" /></div>
      <div className="route-nav">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
      </div>
      <div className="route-nav">
        <div><Link to="/register">Register</Link></div>
        <div><Link to="/login">Login</Link></div>
      </div>
    </div>
      
    </>
  )
}