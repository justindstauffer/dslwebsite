// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HomeLandscapeImage from "../components/homelandscapeimage"
import HomeHardscapeImage from "../components/homehardscapeimage"
import HomeComercialImage from "../components/homecomercialimage"


const HomeServices = () => (
    <div
        style={{
            width: '100%',
            background: '#006738'
            //   borderBottom: '1px solid #E70069'
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                padding: `2.0rem 1.0875rem`,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <div style={{
            }}>
                <div style={{
                    width: `300px`, marginBottom: `1.45rem`, marginLeft: 'auto',
                    marginRight: 'auto',
                }}>
                    <HomeLandscapeImage />
                </div>
                <h1 style={{ textAlign: 'center' }}>Residential Landscaping</h1>
            </div>
            <div style={{
            }}>

                <div style={{
                    width: `300px`, marginBottom: `1.45rem`, marginLeft: 'auto',
                    marginRight: 'auto',
                }}>
                    <HomeComercialImage />
                </div>
                <h1 style={{ textAlign: 'center' }}>Commercial Landscaping</h1>
            </div>
            <div style={{
            }}>
                <div style={{
                    width: `300px`, marginBottom: `1.45rem`, marginLeft: 'auto',
                    marginRight: 'auto',
                }}>
                    <HomeHardscapeImage />
                </div>
                <h1 style={{ textAlign: 'center' }}>Hardscape Design & Installation</h1>
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
