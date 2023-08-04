import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to='/dashboard' style={{fontSize:"1.2rem"}} > Dashboard </Link>
      <Link className="nav-item nav-link" to='/staffdetails'style={{fontSize:"1.2rem"}} > Staff Details</Link>
      <Link className="nav-item nav-link" to='/logout' style={{fontSize:"1.2rem"}} > Logout</Link>
      {/* <Link className="nav-item nav-link" to='/Barchart'>Barchart</Link> */}

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar