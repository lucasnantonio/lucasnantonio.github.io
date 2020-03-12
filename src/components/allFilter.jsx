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
      return "#eeeeee"
    }
    return "#fff"
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setSelected(isAll)
        setSelectedTopics(topics)
        setAll(true)
      }}
      className={`fw5 br-pill black pointer pa3 dib nowrap f5-l f6-ns f7`}
      style={{
        color: isAll ? "white" : "#949494",
        border: !isAll ? "2px solid #f7f7f7" : "2px solid #222",
        backgroundColor: isAll ? "#000" : "transparent",
      }}
    >
      All
    </div>
  )
}

export default AllFilter
