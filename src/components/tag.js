import React from "react"
import { Link } from "gatsby"
const Tag = ({ title }) => {
  return (
    <Link
      className="link black-50"
      to={`/notes/${title}`}
      activeClassName="black"
    >
      <div className="nowrap pb3 underline-hover">{`# ${title}`}</div>
    </Link>
  )
}

export default Tag
