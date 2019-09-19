import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const WeAreHiring = () => (
  <header
    style={{
      background: `#006738`,
      marginBottom: `1.45rem`,
      border: '3px solid #E70069'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '600px',
        padding: `0.5rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}
    >
      <h1 style={{ margin: 0, color: '#E70069' }}>
        Now Hiring!
      </h1>
      <h1 style={{ margin: 0 }}>
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
  </header>
)

WeAreHiring.propTypes = {
  siteTitle: PropTypes.string,
}

WeAreHiring.defaultProps = {
  siteTitle: ``,
}

export default WeAreHiring
