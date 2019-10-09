import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import Topbar from "./topbar"
// import Background from "../images/lakehouse.jpg"

const Header = () => (
  <header
    style={{
      // backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',

    }}
  >
    
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5rem 1.0875rem`,
        // background: 'linear-gradient(to right, white 1%, transparent)'
      }}
    >
      <Topbar />      

      <h1 style={{ marginTop: '-30px', marginBottom: 0, marginLeft: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,

          }}
        >
          <div style={{ width: `350px` }}>
            <Image />
          </div>
        </Link>
      </h1>
      
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
