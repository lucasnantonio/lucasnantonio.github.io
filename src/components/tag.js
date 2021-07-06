import React from "react"
import { Link } from "gatsby"
const Tag = ({ title }) => {
  return (
    <Link className="link" to={`/notes/${title}`}>
      <div className="nowrap black-50 pb3">{`# ${title}`}</div>
    </Link>
  )
}

export default Tag
