import React from 'react'
import './header.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav className='nav-bar'>
            <div className="social-links">
                <FaInstagramSquare />
                <FaYoutube />
                <FaTiktok />
            </div>
            <h1>Janelle De Bique</h1>
            <ul className="nav-links">
              <Link to='/'><li>About</li></Link>
              <Link to='/work'><li>Work</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header