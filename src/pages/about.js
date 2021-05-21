import React from "react"
import About from "../components/about"
import Layout from "../components/layout"
import { minWidth } from "../components/utils"
import { AnimatePresence, motion } from "framer-motion"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div style={{ maxWidth: minWidth }} className="center pt4 ph0-l ph4">
        <About></About>
      </div>
    </Layout>
  )
}

export default AboutPage
