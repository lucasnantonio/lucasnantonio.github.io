import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { minWidth, topics } from "../components/utils"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <div className=" center" style={{ maxWidth: minWidth }}>
      <h1>Not found...</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
