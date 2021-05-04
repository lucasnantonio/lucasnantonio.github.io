import React from "react"
import Reading from "../components/reading"
import Layout from "../components/layout"
import { minWidth, topics } from "../components/utils"

const ReadingPage = () => {
  return (
    <Layout>
      <div className=" center" style={{ maxWidth: minWidth }}>
        <Reading></Reading>
      </div>
    </Layout>
  )
}

export default ReadingPage
