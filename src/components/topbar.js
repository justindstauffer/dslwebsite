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
        display: 'flex',
        justifyContent: 'flex-end',
        background: 'linear-gradient(to left, white, transparent 25%)',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <a href="tel:407-671-4800">
          <button style={{
            background: '#006738',
            color: '#E70069',
            border: '2px solid #E70069',
            borderRadius: '6px',
            padding: '4px',
            marginRight: '10px'
          }}>
            Now Hiring
          </button>
        </a>

      </h1>
      <h1 style={{ margin: 0 }}>
        <a href="tel:407-671-4800">
          <button style={{
            background: '#006738',
            color: '#E70069',
            border: '2px solid #E70069',
            borderRadius: '6px',
            padding: '4px'
          }}>
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
