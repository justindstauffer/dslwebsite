// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Topbar = () => (
  <header
    style={{
      background: `white`,
      //   borderBottom: '1px solid #E70069'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <a href="tel:407-671-4800">
          <button style={{
            background: '#E70069',
            color: '#006738',
            border: '1px solid #E70069',
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
