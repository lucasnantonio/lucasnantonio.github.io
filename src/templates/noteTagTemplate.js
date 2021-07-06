import React from "react"
import Layout from "../components/layout"
import NotesLayout from "../components/notesLayout"
import { Note } from "../pages/Note"

export default function Template({
  location,
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  return (
    <Layout location={location}>
      <NotesLayout notes={pageContext.notes}>
        <h1 className="mt0 f4 pt0 pb3">
          <span className="black-40 mr2 fw7">#</span>
          {pageContext.tag}
        </h1>
        {pageContext.notes
          .filter(note => note.node.frontmatter.tags.includes(pageContext.tag))
          .map(note => (
            <Note
              format={"list"}
              key={note.node.frontmatter.title}
              data={note.node}
            ></Note>
          ))}
      </NotesLayout>
    </Layout>
  )
}
