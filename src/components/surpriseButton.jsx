import React, { useState, useEffect } from "react"
import { minWidth, topics, sizes } from "./utils"
import { Link } from "gatsby"

function SurpriseButton({ posts }) {
  const [isHovered, setHover] = useState(false)
  const [randomPost, setRandomPost] = useState("")

  function startRandom() {
    setRandomPost(getRandomPostUrl())
  }
  function getRandomPostUrl() {
    return posts[Math.floor(Math.random() * posts.length)].node.frontmatter.path
  }

  return (
    <>
      <Link
        to={getRandomPostUrl()}
        onMouseEnter={() => startRandom()}
        onMouseLeave={() => setHover(false)}
        onClick={() => stopColor()}
        className={`br-pill pointer pa3-l pa2-ns pa1 neue-regular mr3-l mr0 dib nowrap f5-l f6-ns f7 `}
      >
        Surprise me
      </Link>
    </>
  )
}

export default SurpriseButton
