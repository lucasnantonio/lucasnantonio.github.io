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
      className={`fw5 black pointer nowrap tracked-tight mr3 mb0-l mb3`}
      style={{
        // color: isAll ? "black" : "rgba(0,0,0,.4)",
        borderBottom: isAll ? "3px solid black" : "3px solid transparent",
        color:
          !isAll && !isHovered
            ? "#999"
            : !isAll && isHovered
            ? "#666"
            : "black",
        // backgroundColor: getBackgroundColor(),
      }}
    >
      All
    </div>
  )
}

export default AllFilter
