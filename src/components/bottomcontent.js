// import { Link } from "gatsby"
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
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <div>
                <h5>DS Landscape & Maintenance, Inc. <br></br>
                    P.O. Box 180455 <br></br>
                    Casselberry, FL. 32718
                </h5>
            </div>
            <div><h5>DS Landscape & Maintenance, Inc. <br></br>
                    P.O. Box 180455 <br></br>
                    Casselberry, FL. 32718
                </h5></div>
            <div><h5>DS Landscape & Maintenance, Inc. <br></br>
                    P.O. Box 180455 <br></br>
                    Casselberry, FL. 32718
                </h5></div>
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
