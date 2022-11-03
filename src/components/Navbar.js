import React from "react";
import PropTypes from "prop-types"
import './Theme.css'
import {Link} from 'react-router-dom'

function Navbar(props) {     //here we pass props to our component 
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {/* <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div> */}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Custom Themes
            </button>
            <ul className="dropdown-menu">
              <span><button className="themeBtn mx-1" id="blue" onClick={props.toggleMode}></button></span>
              <span><button className="themeBtn mx-1" id="black" onClick={props.toggleMode}></button></span>
              <span><button className="themeBtn mx-1" id="green" onClick={props.toggleMode}></button></span>
              <span><button className="themeBtn mx-1" id="violet" onClick={props.toggleMode}></button></span>
              <span><button className="themeBtn mx-1" id="white" onClick={props.toggleMode}></button></span>
            </ul>
          </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

//it will check whether prop passed is string or not
Navbar.propTypes = {
  title: PropTypes.string
}

//if no prop is passes then this default will be rendered
Navbar.defaultProps = {
  title: "Title Here"
}

export default Navbar;