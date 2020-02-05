import React, { useState, useEffect } from "react"
import { minWidth, topics, sizes } from "./utils"

function SurpriseButton({ posts }) {
  const [isHovered, setHover] = useState(false)

  return (
    <>
      <li
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => stopColor()}
        className={`br-pill pointer pa3-l pa2-ns pa1 neue-regular mr3-l mr0 dib nowrap f5-l f6-ns f7 `}
      >
        Surprise me
      </li>
    </>
  )
}

export default SurpriseButton
