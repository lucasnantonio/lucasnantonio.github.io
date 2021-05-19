import React from "react"
import About from "../components/about"
import Layout from "../components/layout"
import { minWidth } from "../components/utils"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div style={{ maxWidth: minWidth }} className="center pt4 ph0-l ph4">
        <h1 className="f1-l f2 fw7 lh-title pb5 tracked-tight">
          Brazilian product designer based in New York. I&nbsp;work with Health
          at Twitter and teach Behavioral Design at Aprender.
        </h1>
        <About></About>
      </div>
    </Layout>
  )
}

export default AboutPage
