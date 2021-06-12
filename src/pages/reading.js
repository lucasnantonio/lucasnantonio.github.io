import React from "react"
import Reading from "../components/reading"
import Layout from "../components/layout"
import { minWidth, topics } from "../components/utils"

const ReadingPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className=" center mt5 ph0-l ph4" style={{ maxWidth: minWidth }}>
        <Reading></Reading>
      </div>
    </Layout>
  )
}

export default ReadingPage
