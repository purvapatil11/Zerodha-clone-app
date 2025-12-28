import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
  <Link className="navbar-brand" to="/">
    <img src='media/images/logo.svg' className='ms-auto p-2' alt='logo' style={{width:"25%"}}></img>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
           <li className="nav-item">
        <Link className="nav-link active" to="/signup">Signup</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/pricing">Pricing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/support">Support</Link>
      </li>
    </ul>
  
    
  </div>
</nav>
  )
}

export default Navbar