import React from 'react'
import './header.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <nav className='nav-bar'>
            <div className="social-links">
                <FaInstagramSquare />
                <FaYoutube />
                <FaTiktok />
            </div>
            <h1>Janelle De Beq</h1>
            <div className="nav-links">
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </div>
        </nav>
    </header>
  )
}

export default Header