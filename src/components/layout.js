/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Topbar from "./topbar"
import Navbar from "./navbar"
import Bottombar from "./bottombar"
import BottomContent from "./bottomcontent"
import WeAreHiring from "./wearehiring"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Topbar /> */}
      <Header  />
      <Navbar />
      <WeAreHiring />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
          // padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        
      </div>
      <BottomContent />
      <Bottombar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
