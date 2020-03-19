import React from "react"
import { capitalize } from "./utils"

function Tag({ title }) {
  return (
    <span
      key={title}
      className="f7 mr2 pv2  ph3 ba br-pill b--black-10 dib br1 silver fl dib flex flex-column justify-center h1"
    >
      <div className="mono nowrap">{capitalize(title)}</div>
    </span>
  )
}

export default Tag
