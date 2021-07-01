import Layout from "../components/layout"
import { minWidth } from "../components/utils"
import React from "react"
import { graphql } from "gatsby"

const Note = ({ title, tags, html }) => {
  return (
    <div key={title}>
      <h1>{title}</h1>
      <div className="lh-copy" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

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
        {notes.map(item => {
          return (
            <>
              <Note
                key={item.node.frontmatter.title}
                title={item.node.frontmatter.title}
                html={item.node.html}
              ></Note>
            </>
          )
        })}
      </div>
    </Layout>
  )
}

export default NotesPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "notes" } }
        frontmatter: { title: { ne: "" } }
      }
    ) {
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
