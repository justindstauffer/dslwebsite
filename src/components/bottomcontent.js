import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BottomContent = () => (
  <header
    style={{
      background: `#006738`,
      //   borderBottom: '1px solid #E70069'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.5rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <h5>
          DS Landscape & Maintenance, Inc. <br></br>
          P.O. Box 180455 <br></br>
          Casselberry, FL. 32718
        </h5>
      </div>
      <div>
        <h5>
          DS Landscape & Maintenance, Inc. <br></br>
          P.O. Box 180455 <br></br>
          Casselberry, FL. 32718
        </h5>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "5px 0" }}>
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
        <h1 style={{ margin: "5px 0" }}>
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
        <h1 style={{ margin: "5px 0" }}>
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
        <h1 style={{ margin: "5px 0" }}>
          <Link
            to="/"
            style={{
              color: `#E70069`,
              textDecoration: `none`,
            }}
          >
            Careers
          </Link>
        </h1>
      </div>
    </div>
  </header>
)

BottomContent.propTypes = {
    siteTitle: PropTypes.string,
}

BottomContent.defaultProps = {
    siteTitle: ``,
}

export default BottomContent
