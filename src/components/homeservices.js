// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HomeLandscapeImage from "../components/homelandscapeimage"
import HomeComercialImage from "../components/homecomercialimage"


const HomeServices = () => (
  <div
    style={{
      width: "100%",
      background: "#006738",
      
      //   borderBottom: '1px solid #E70069'
    }}
  >
    <h1
      style={{
        textAlign: "center",
        paddingTop: "1rem",
        fontSize: 36,
      }}
    >
      Landscaping Services
    </h1>
    <div
      style={{
        margin: `0 auto`,
        padding: `0 1.0875rem`,
        maxWidth: "900px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{}}>
        <div
          style={{
            width: `300px`,
            marginBottom: `1.45rem`,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HomeLandscapeImage />
        </div>
        <h1 style={{ textAlign: "center" }}>Residential</h1>
      </div>
      
      <div style={{}}>
        <div
          style={{
            width: `300px`,
            marginBottom: `1.45rem`,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HomeComercialImage />
        </div>
        <h1 style={{ textAlign: "center" }}>Commercial</h1>
      </div>
    </div>
  </div>
)

HomeServices.propTypes = {
    siteTitle: PropTypes.string,
}

HomeServices.defaultProps = {
    siteTitle: ``,
}

export default HomeServices
