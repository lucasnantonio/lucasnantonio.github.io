import React from "react"
import { minWidth, getUniqueTags } from "./utils"
import Tag from "./tag"

const NotesLayout = ({ children, notes }) => {
  return (
    <div className="flex center mt5 ph0-l ph4" style={{ maxWidth: minWidth }}>
      <div className="mr5 pr4">
        {getUniqueTags(notes).map(tag => (
          <Tag key={tag} title={tag} />
        ))}
      </div>
      <div className="flex flex-column">{children}</div>
    </div>
  )
}

export default NotesLayout
