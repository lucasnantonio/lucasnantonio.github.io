import React from "react"
import { capitalize } from "./utils"

function Tag({ title }) {
  return (
    <span
      key={title}
      className="f7 pa2 b--black-10 dib br1 silver ml2 fl dib flex flex-column justify-center h1"
    >
      <div className="mono nowrap">{capitalize(title)}</div>
    </span>
  )
}

export default Tag
