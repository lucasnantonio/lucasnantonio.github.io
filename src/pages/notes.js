import Layout from "../components/layout"
import { minWidth } from "../components/utils"
import React from "react"
import { graphql } from "gatsby"

const NotesPage = ({
  data: {
    allMarkdownRemark: { edges: notes },
  },
  location,
}) => {
  console.log(notes)
  return (
    <Layout location={location}>
      <div className=" center mt5 ph0-l ph4" style={{ maxWidth: minWidth }}>
        <div>mynotes</div>
      </div>
    </Layout>
  )
}

export default NotesPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fields: { collection: { eq: "notes" } } }) {
      totalCount
      edges {
        node {
          fields {
            collection
          }
          frontmatter {
            title
            source
            tags
          }
          html
        }
      }
    }
  }
`
