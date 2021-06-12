import React from "react"
import Writing from "../components/writing"
import Layout from "../components/layout"
import { minWidth, topics } from "../components/utils"

const WritingPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className=" center mt5 ph0-l ph4" style={{ maxWidth: minWidth }}>
        <Writing></Writing>
      </div>
    </Layout>
  )
}

export default WritingPage
