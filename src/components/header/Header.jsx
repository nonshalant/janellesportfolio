import React, { useState } from 'react'
import './header.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState()
  
  const openDropDown = () => { 
    setDropDownOpen(!dropDownOpen)
  }
  
  const closeDropDown = () => {
    setDropDownOpen(false)
  }

  return (
    <header>
        <nav className='nav-bar'>
            <div className="social-links">
                <FaInstagramSquare />
                <FaYoutube />
                <FaTiktok />
            </div>
            <h1 onClick={closeDropDown}>Janelle De Bique</h1>
            <ul className="nav-links">
              <Link to='/' onClick={closeDropDown}><li>About</li></Link>
              <li onClick={openDropDown}>Work</li>
              {
                dropDownOpen &&
                <ul className='drop-down'>
                  <Link to='work/acting' onClick={closeDropDown}><li>Acting</li></Link>
                  <Link to='work/dp+ad' onClick={closeDropDown}><li>DP + AD</li></Link>
                  <Link to='work/directing+produced' onClick={closeDropDown}><li>Directing + Produced</li></Link>
                </ul>
              }
              <Link to='/contact' onClick={closeDropDown}><li>Contact</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header