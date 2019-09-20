import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import HomeContent from "../components/homecontent"
import HomeServices from "../components/homeservices"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContent />
    <HomeServices />
    <HomeContent />
  </Layout>
)

export default IndexPage
