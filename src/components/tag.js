import React from "react"
import { Link } from "gatsby"
const Tag = ({ title }) => {
  return (
    <Link className="link" to={`/notes/${title}`}>
      <h3 className="nowrap black-50">{`# ${title}`}</h3>
    </Link>
  )
}

export default Tag
