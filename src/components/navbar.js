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
      marginBottom: `1.45rem`,
      paddingBottom: '2px',
    }}
  >
    <div>
      <h1
        style={{
          margin: 0,
          padding: "0.2rem",
          border: "3px solid #E70069",
          textAlign: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: `#E70069`,
            textDecoration: `none`,
          }}
        >
          Apply Here
        </Link>
      </h1>
    </div>
    <div
      style={{
        margin: `0 auto`,
        width: "600px",
        padding: `0.5rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#c4996c`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#c4996c`,
            textDecoration: `none`,
          }}
        >
          Services
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#c4996c`,
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
