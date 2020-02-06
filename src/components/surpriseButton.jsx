import React, { useState, useEffect } from "react"
import { minWidth, topics, sizes } from "./utils"
import { Link } from "gatsby"

function SurpriseButton({ posts }) {
  const [isHovered, setHover] = useState(false)
  const [randomPost, setRandomPost] = useState("")

  var myAnimation

  function swapColor() {
    document.getElementById("surpriseLink").classList.add("blinking")
  }

  function startRandom() {
    swapColor()
    setRandomPost(getRandomPostUrl())
  }

  function stopRandom() {
    document.getElementById("surpriseLink").classList.remove("blinking")
  }

  function getRandomPostUrl() {
    return posts[Math.floor(Math.random() * posts.length)].node.frontmatter.path
  }

  return (
    <>
      <Link
        id="surpriseLink"
        to={getRandomPostUrl()}
        onMouseEnter={() => startRandom()}
        onMouseOut={() => stopRandom()}
        className={`ba b--white bw1 gray fw2 link hover-white br-pill pointer pa3 neue-regular mr3-l mr0 dib nowrap f5 `}
      >
        Surprise me
      </Link>
    </>
  )
}

export default SurpriseButton
