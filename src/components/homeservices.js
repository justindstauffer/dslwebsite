// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HomeLandscapeImage from "../components/homelandscapeimage"
import HomeComercialImage from "../components/homecomercialimage"
import HomeHardscapeImage from "../components/homehardscapeimage"


const HomeServices = () => (
  <div
    style={{
      width: "100%",
      background: "white",
      borderTop: '3px solid #006738',
      borderBottom: '3px solid #006738',
      padding: '1rem 0'
      //   borderBottom: '1px solid #E70069'
    }}
  >
    
    <div
      style={{
        margin: `0 auto`,
        padding: `1rem 1.0875rem`,
        maxWidth: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{}}>
        <h1 style={{ textAlign: "center", fontSize: '36px', marginBottom: '15px' }}>Residential</h1>
        <div
          style={{
            width: `350px`,
            marginBottom: `1.45rem`,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HomeLandscapeImage />
        </div>
        <p style={{
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nam quasi iste facilis quod nesciunt doloribus ullam hic quae ea, consequuntur sint earum voluptate cupiditate ducimus? Autem, minus mollitia! Atque.
        </p>
      </div>
      
      <div style={{}}>
        <h1 style={{ textAlign: "center", fontSize: '36px', marginBottom: '15px' }}>Commercial</h1>
        <div
          style={{
            width: `350px`,
            marginBottom: `1.45rem`,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HomeComercialImage />
        </div>
        <p style={{
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nam quasi iste facilis quod nesciunt doloribus ullam hic quae ea, consequuntur sint earum voluptate cupiditate ducimus? Autem, minus mollitia! Atque.
        </p>
      </div>
      <div style={{}}>
        <h1 style={{ textAlign: "center", fontSize: '36px', marginBottom: '15px' }}>Irrigation</h1>
        <div
          style={{
            width: `350px`,
            marginBottom: `1.45rem`,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HomeHardscapeImage />
        </div>
        <p style={{
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nam quasi iste facilis quod nesciunt doloribus ullam hic quae ea, consequuntur sint earum voluptate cupiditate ducimus? Autem, minus mollitia! Atque.
        </p>
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
