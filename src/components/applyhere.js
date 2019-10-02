import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ApplyHere = () => (
    <div>
        <h1 style={{ margin: 0, padding: '0.2rem', border: '3px solid #E70069', textAlign: 'center', }}>
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
)

ApplyHere.propTypes = {
    siteTitle: PropTypes.string,
}

ApplyHere.defaultProps = {
    siteTitle: ``,
}

export default ApplyHere
