// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const RequestAQuote = () => (
  
    
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            border: "2px solid #006738",
          }}
        >
          <h1>Request A Quote</h1>
          <label>
            Name:<br></br>
            <input type="text" name="name" />
          </label>
          <label>
            Email:<br></br>
            <input type="email" name="email" />
          </label>
          <label>
            Phone:<br></br>
            <input type="tel" name="phone" />
          </label>
          <label>
            Best time to call:<br></br>
            <input type="text" name="calltime" />
          </label>
          <label>
            Project Details:<br></br>
            <textarea type="textarea" name="details" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    
  
)

RequestAQuote.propTypes = {
  siteTitle: PropTypes.string,
}

RequestAQuote.defaultProps = {
  siteTitle: ``,
}

export default RequestAQuote
