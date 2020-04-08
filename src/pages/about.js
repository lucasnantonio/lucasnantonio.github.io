import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { LifeEvents } from "../components/lifeEvents"
import { minWidth } from "../components/utils"

const LifeEvent = ({ title, year, text }) => {
  return (
    <div className="flex ">
      <div className="mr4 bl bw1"></div>
      <div className="pa4 ba br3 bw1 b--near-white mb4">
        <div>
          <div>{year}</div>
          <div>{title}</div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  )
}

const About = () => (
  <Layout>
    <SEO title="About me" />
    <div
      style={{ maxWidth: minWidth }}
      className="flex w-100 justify-between flex-column center"
    >
      <h1>The story of me</h1>
      {LifeEvents.map((item) => LifeEvent(item))}
    </div>
  </Layout>
)

export default About
