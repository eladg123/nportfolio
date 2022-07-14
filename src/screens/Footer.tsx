import React from 'react'
import logo from '../images/eglogo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div
      className="footer d__flex align__items__center pz-10"
      style={{ height: '65px' }}
    >
      <img
        src={logo}
        alt="Elad Gabay logo"
        className="footer__img pointer"
        style={{ height: '65px' }}
      />
      <span className="copyright">
        © Developed and designed by Elad Gabay , 2022
      </span>
    </div>
  )
}

export default Footer
