import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    {/* Navbar start */}
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/categories">Category</Link>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/customer/register" className="dropdown-item" href="#">Register</Link></li>
            <li><Link to="/customer/login" className="dropdown-item" href="#">Login</Link></li>
            <li><hr className="dropdown-divider"/></li>
            
            <li><Link to="/customer/dashboard"className="dropdown-item" href="#">Dashboard</Link></li>
            <li><Link to="/customer/login"className="dropdown-item" href="#">Logout</Link></li>
          </ul>
        </li>

        {/* seller dropdown */}

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Seller Panel
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/seller/register" className="dropdown-item" href="#">Register</Link></li>
            <li><Link to="/seller/login" className="dropdown-item" href="#">Login</Link></li>
            <li><hr className="dropdown-divider"/></li>
            
            <li><Link to="/seller/dashboard"className="dropdown-item" href="#">Dashboard</Link></li>
            <li><Link to="/seller/login"className="dropdown-item" href="#">Logout</Link></li>
          </ul>
        </li>


        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/checkout">New Orders (4)</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/checkout">My Cart (4)</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

{/* Nabar end */}
    
    </>
  )
}

export default Header