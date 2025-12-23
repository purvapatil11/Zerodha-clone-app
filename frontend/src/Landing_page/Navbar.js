import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
  <a class="navbar-brand" href="#">
    <img src='media/images/logo.svg' className='ms-auto p-2' alt='logo' style={{width:"25%"}}></img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
           <li class="nav-item">
        <a class="nav-link active" href="#">Signup</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Support</a>
      </li>
    </ul>
  
    
  </div>
</nav>
  )
}

export default Navbar