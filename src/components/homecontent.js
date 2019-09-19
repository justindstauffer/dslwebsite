// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HomeContent = () => (
    <div
        style={{
            width: '100%',
            background: 'linear-gradient(to bottom, white, #c4996c66)'
            //   borderBottom: '1px solid #E70069'
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                padding: `0.5rem 1.0875rem`,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
            >
                <div>Request A Quote</div>
            <div style={{
                maxWidth: '600px'
            }}>
            <h1>Orlando Landscaping and Maintenance</h1>
            <p>DS Landscape & Maintenance, Inc. has been serving Central Florida since 1991. 
                Providing complete residential and commercial landscaping solutions for property 
                owners and managers. Personalized attention, creativity, and design creating 
                immaculate properties second to none. <br></br><br></br>

                Fully licensed and insured, offering state-of-the-art equipment and practices. 
                A well-trained staff who are licensed, insured, and professional bring the highest
                quality of workmanship to each and every property.<br></br><br></br>
            </p>
            </div>
            
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