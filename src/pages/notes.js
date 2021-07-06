import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import NotesLayout from "../components/notesLayout"
import { Note } from "./Note"
import best from "../images/icons/best-2.svg"
import book from "../images/icons/book.svg"
import pizza from "../images/icons/pizza.svg"
import { Link } from "gatsby"

const NotesPage = ({
  data: {
    allMarkdownRemark: { edges: notes },
  },
  location,
}) => {
  return (
    <Layout location={location}>
      <NotesLayout notes={notes}>
        <div
          style={{
            background: "lightblue",
            gridColumn: "main-start / main-end",
          }}
          className="mb4 pa6 ml4"
        >
          <div className="flex flex-column">
            <h1 className="f3 mt0 black">Welcome to my public notebook.</h1>
          </div>
          <p className="f3 black-50 lh-copy mt0 mb2 measure">
            An experimental space for where store, organize, and share what I've
            been reading and thinking about.
          </p>
        </div>
        <div className="flex">
          <Link
            to="/notes/book-notes"
            className="tc link black bg-animate pa6 w-third ba hover-bg-near-white pointer b--black-10 ml4 f4"
          >
            <img style={{ width: "24px" }} src={book}></img>
            Books
          </Link>
          <Link
            to="/notes/best"
            className="tc link black bg-animate pa6 w-third ba hover-bg-near-white pointer b--black-10 ml4 f4"
          >
            <img style={{ width: "24px" }} src={best}></img>
            Best
          </Link>
          <Link
            to="/notes/book-notes"
            className="tc link black bg-animate pa6 w-third ba hover-bg-near-white pointer b--black-10 ml4 f4"
          >
            <img style={{ width: "24px" }} src={pizza}></img>
            Random
          </Link>
        </div>
        <div className="w-100">
          <div className="flex flex-column pa4 mt5 f3">Recent notes</div>
          {notes.map((item, index) => {
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
