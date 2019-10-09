// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import RequestAQuote from "../components/requestaquote"

const HomeContent = () => (
  <div
    style={{
      width: "100%",
      background: "white",
      //   borderBottom: '1px solid #E70069'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.5rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: 'center',
          marginBottom: '1rem'
        }}
      >
        <h1 style={{
          fontSize: '2.25rem'
        }}>Orlando Landscaping and Lawn Maintenance</h1>
        <p>
          DS Landscape & Maintenance, Inc. has been serving Central Florida
          since 1991. Providing complete residential and commercial landscaping
          solutions for property owners and managers. Personalizing attention,
          creativity, and design to build immaculate properties.{" "}
          
        </p>
        <button style={{
          borderRadius: '6px',
          background: '#E70069',
          padding: '10px'
        }}>Request a Quote</button>
      </div>
      {/* <div
        style={{
          maxWidth: "600px",
        }}
      >
        <RequestAQuote />
      </div> */}
    </div>
  </div>
)

HomeContent.propTypes = {
  siteTitle: PropTypes.string,
}

HomeContent.defaultProps = {
  siteTitle: ``,
}

export default HomeContent
