import React from "react"
import Layout from "../components/layout"
import NotesLayout from "../components/notesLayout"
import { Note } from "../pages/Note"

export default function Template({
  location,
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  console.log(pageContext)
  return (
    <Layout location={location}>
      <NotesLayout notes={pageContext.notes}>
        <h1>
          <span className="black-40 mr3">#</span>
          {pageContext.tag}
        </h1>
        {pageContext.notes
          .filter(note => note.node.frontmatter.tags.includes(pageContext.tag))
          .map(note => (
            <Note key={note.id} data={note.node}></Note>
          ))}
      </NotesLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        topics
        subtitle
        problem
        solution
        impact
        color
        where
        learn_more
        learnings
        team
        myrole
        link
        link_label
        cover_image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
