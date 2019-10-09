import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Background from "../images/lakehouse.png"

const ImageBreak = () => (
  <header
    style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      height: '400px',

    }}
  >
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center',
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <h1 style={{
          marginTop: '160px',
          fontSize: '68px'
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          
        </Link>
      </h1>
    </div>
  </header>
)

ImageBreak.propTypes = {
  siteTitle: PropTypes.string,
}

ImageBreak.defaultProps = {
  siteTitle: ``,
}

export default ImageBreak
