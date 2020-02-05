import React, { useState, useEffect } from "react"
import { minWidth, topics, sizes } from "./utils"

function AllFilter({ setSelectedTopics, isAll, setAll }) {
  const [isHovered, setHover] = useState(false)
  const [isSelected, setSelected] = useState(false)

  const getBackgroundColor = () => {
    if (isAll) {
      return "#222"
    }
    if (isHovered) {
      return "#f2f2f2"
    }
    return "#fff"
  }

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setSelected(isAll)
        setSelectedTopics(topics)
        setAll(true)
      }}
      className={`br-pill black pointer pa3-l pa2 neue-regular mr3-l mr0 dib nowrap f5`}
      style={{
        color: isAll ? "white" : "#949494",
        border: !isAll ? "2px solid #ffffff" : "2px solid #222",
        backgroundColor: isAll ? "#000" : "transparent",
      }}
    >
      All
    </li>
  )
}

export default AllFilter
