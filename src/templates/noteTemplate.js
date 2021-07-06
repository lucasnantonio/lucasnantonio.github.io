import React from "react"
import Layout from "../components/layout"
import NotesLayout from "../components/notesLayout"
import { Note } from "../pages/Note"
import { minWidth } from "../components/utils"

export default function Template({ location, pageContext, data }) {
  return (
    <Layout location={location}>
      <NotesLayout notes={pageContext.notes}>
        <Note format={"note"} data={data.markdownRemark} />
      </NotesLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        tags
        source
      }
    }
  }
`
