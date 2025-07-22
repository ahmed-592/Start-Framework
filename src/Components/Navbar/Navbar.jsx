import { Link, NavLink } from "react-router-dom";
import style from './Navbar.module.css'
import { useEffect, useState } from "react";


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const Scroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", Scroll);

    return () => {
      window.removeEventListener("scroll", Scroll);
    };
  }, []);
  

  return <>
  <nav className="navbar navbar-expand-lg position-sticky top-0 start-0 end-0 z-3">
    
    {scrolled?<div className={`container ${style.navNonPadding}`}> 
    <Link className= {`navbar-brand text-light text-uppercase ${style.fontLink}`} to={'/'}>Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item me-2">
          <NavLink className={`nav-link text-light text-uppercase ${style.fontNavLink}`} to={"/about"}>About</NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink className={`nav-link text-light text-uppercase ${style.fontNavLink}`} to={"/portfolio"}>Portfolio</NavLink>
        </li>
        <li className="nav-item me-1">
          <NavLink className={`nav-link text-light text-uppercase ${style.fontNavLink}`} to={"/contact"}>Contact</NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>:<div className={`container ${style.navPadding}`}> 
    <Link className= {`navbar-brand text-light text-uppercase ${style.fontLink}`} to={'/'}>Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item me-2">
          <NavLink className={`nav-link text-light text-uppercase ${style.fontNavLink}`} to={"/about"}>About</NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink className={`nav-link text-light text-uppercase ${style.fontNavLink}`} to={"/portfolio"}>Portfolio</NavLink>
        </li>
        <li className="nav-item me-1">
          <NavLink className={`nav-link text-light text-uppercase ${style.fontNavLink}`} to={"/contact"}>Contact</NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>}
  
</nav>

  </>
}
