// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Bottombar = () => (
  <header
    style={{
      background: `#006738`,
    //   borderBottom: '1px solid #E70069'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <h5 style={{ margin: 0 }}>
      COPYRIGHT © 2019 DS Landscaping & Maintenance Inc.
      </h5>
    </div>
  </header>
)

Bottombar.propTypes = {
  siteTitle: PropTypes.string,
}

Bottombar.defaultProps = {
  siteTitle: ``,
}

export default Bottombar
