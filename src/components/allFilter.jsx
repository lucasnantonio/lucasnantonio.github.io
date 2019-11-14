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
      return "#f7f7f7"
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
        setAll(isAll)
      }}
      className={`black br-pill pointer pv2 ph3 neue-regular mr3 dib nowrap`}
      style={{
        backgroundColor: getBackgroundColor(),
        color: !isAll ? "#222" : "white",
        border: !isAll ? "2px solid #f3f3f3" : "2px solid #222",
      }}
    >
      All
    </li>
  )
}

export default AllFilter
