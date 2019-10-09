import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Navbar = () => (
  <header
    style={{
      background: `#006738`,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      // marginBottom: `1.45rem`,
      paddingBottom: '2px',
      paddingLeft: '50px',
      paddingRight: '50px'
    }}
  >
    <div
      
      style={{
        margin: `0 auto`,
        width: "100%",
        padding: `0.75rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-around",
      }}
    >

      <h1 
      id='navbarItems'
      style={{ margin: 0, fontSize: '1.0rem' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h1>
      <h1 
      id='navbarItems'
      style={{ margin: 0, fontSize: '1.0rem' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Services
        </Link>
      </h1>
      <h1 
      id='navbarItems'
      style={{ margin: 0, fontSize: '1.0rem' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          FAQs
        </Link>
      </h1>
      <h1 
      id='navbarItems'
      style={{ margin: 0, fontSize: '1.0rem' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Reviews
        </Link>
      </h1>
      <h1 
      id='navbarItems'
      style={{ margin: 0, fontSize: '1.0rem' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact
        </Link>
      </h1>
      
    </div>
    
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
