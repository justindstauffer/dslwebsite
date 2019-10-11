// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Topbar = () => (
  <header
    style={{
      background: `#c4996c, 0.0`,
      //   borderBottom: '1px solid #E70069'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5rem 0.5rem`,
        display: "flex",
        justifyContent: "flex-end",
        // background: 'linear-gradient(to left, white, transparent 25%)',
        borderRadius: "10px",
      }}
    >
      <h1 
      id='nowHiring'
      style={{ margin: 0 }}>
        <a href="tel:407-671-4800">
          <button
            style={{
              background: "#E70069",
              color: "black",
              border: "2px solid #006738",
              borderRadius: "6px",
              padding: "4px",
              marginRight: "10px",
            }}
          >
            Now Hiring
          </button>
        </a>
      </h1>
      <h1 style={{ margin: 0 }}>
        <a href="tel:407-671-4800">
          <button
            style={{
              background: "#E70069",
              color: "black",
              border: "2px solid #006738",
              borderRadius: "6px",
              padding: "4px",
              marginRight: "10px",
            }}
          >
            407-671-4800
          </button>
        </a>
      </h1>
    </div>
  </header>
)

Topbar.propTypes = {
  siteTitle: PropTypes.string,
}

Topbar.defaultProps = {
  siteTitle: ``,
}

export default Topbar
