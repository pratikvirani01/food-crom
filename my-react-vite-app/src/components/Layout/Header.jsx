import React,{useState} from 'react'
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Header() {

        //const[nav,setNav] = useState(false);
        /* scroll Navbar */

        //const changeValueOnScroll = () =>{
          //const scrollValue = Document?.documentElement?.scrolltop;
          //scrollValue > 100 ? setNav(true) : setNav(false);
        //};

        //window.addEventListener("scroll", changeValueOnScroll);

  return (
    <>
    <header>
            <nav className="navbar navbar-expand-lg" /*className= {`${nav === true ? "sticky" : ""}`} */>
        <div className="container-fluid">
          <Link to="/" className="logo" >
          <img src={Logo} alt="logo" className="img-fluid"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/our menu">Our menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                    <div className="Cart">
                    <i className="bi bi-bag fs-5 "></i>
                    <em className="roundpoint">2</em>
                    </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
