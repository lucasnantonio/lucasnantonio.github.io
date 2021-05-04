import React from "react"
import Writing from "../components/writing"
import Layout from "../components/layout"
import { minWidth, topics } from "../components/utils"

const WritingPage = () => {
  return (
    <Layout>
      <div className=" center" style={{ maxWidth: minWidth }}>
        <Writing></Writing>
      </div>
    </Layout>
  )
}

export default WritingPage
