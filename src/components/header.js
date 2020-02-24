import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle, headerStyle }) => (
  <div className="Header" style={headerStyle}>
    <div className="HeaderGroup">
      <Link smooth to="/#projects">Projects</Link>
      <Link to="/aboutme">About Me</Link>
      <Link to="/"><img src={require('../images/logoJF.png')} width='30' background="white" /></Link>
      <Link to="/awards">Awards</Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  </div>
)

export default Header
