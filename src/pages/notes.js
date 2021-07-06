import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import NotesLayout from "../components/notesLayout"
import { Note } from "./Note"
import leaf from "../images/icons/leaf.svg"

const NotesPage = ({
  data: {
    allMarkdownRemark: { edges: notes },
  },
  location,
}) => {
  return (
    <Layout location={location}>
      <NotesLayout notes={notes}>
        <div className=" mb4  pb6  bb ph3">
          <div className="flex flex-column">
            {/* <img className={"mr2"} style={{ width: "24px" }} src={leaf}></img> */}
            <h1 className="f3 black mt0">Welcome to my public notes.</h1>
          </div>
          <p className="f3 black-50 lh-copy mt0 mb2 measure">
            An experimental space for me to store, organize, and share what I've
            been reading and thinking about.
          </p>
        </div>
        <div className="w-100">
          {notes.map(item => {
            return (
              <Note
                format={"list"}
                key={item.node.frontmatter.title}
                data={item.node}
              ></Note>
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
          excerpt
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
