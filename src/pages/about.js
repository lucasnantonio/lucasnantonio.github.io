import React from "react"
import About from "../components/about"
import Layout from "../components/layout"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <About></About>
    </Layout>
  )
}

export default AboutPage
