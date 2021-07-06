import React from "react"
import { minWidth, getUniqueTags } from "./utils"
import Tag from "./tag"
import { Link } from "gatsby"

const NotesLayout = ({ children, notes }) => {
  return (
    <div className="flex center mt6 ph0-l ph4" style={{ maxWidth: minWidth }}>
      <div className="mr5 pr4">
        <Link to="/notes" className="link black-50 mb3" activeClassName="black">
          <div className="mb3">All</div>
        </Link>
        {getUniqueTags(notes).map(tag => (
          <Tag key={tag} title={tag} />
        ))}
      </div>
      <div className="flex flex-column w-100">{children}</div>
    </div>
  )
}

export default NotesLayout
