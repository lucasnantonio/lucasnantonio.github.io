import React from "react"

function Tag({ title }) {
  return (
    <span
      key={title}
      className="f7 pa2 ba b--black-10 dib br1 silver ml2 fl dib flex flex-column justify-center h1"
    >
      <div className="mono nowrap">{title}</div>
    </span>
  )
}

export default Tag
