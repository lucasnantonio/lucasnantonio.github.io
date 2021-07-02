import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import NotesLayout from "../components/notesLayout"
import { Note } from "./Note"

const NotesPage = ({
  data: {
    allMarkdownRemark: { edges: notes },
  },
  location,
}) => {
  return (
    <Layout location={location}>
      <NotesLayout notes={notes}>
        <div className="w-100">
          {notes.map(item => {
            return (
              <>
                <Note key={item.node.frontmatter.title} data={item.node}></Note>
              </>
            )
          })}
        </div>
      </NotesLayout>
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
