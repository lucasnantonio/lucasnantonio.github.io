import React from "react"
import About from "../components/about"
import Layout from "../components/layout"
import { minWidth, topics } from "../components/utils"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className=" center" style={{ maxWidth: minWidth }}>
        <About></About>
      </div>
    </Layout>
  )
}

export default AboutPage
