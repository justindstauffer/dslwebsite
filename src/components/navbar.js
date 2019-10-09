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
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: "600px",
        padding: `0.75rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
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
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
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
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
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
