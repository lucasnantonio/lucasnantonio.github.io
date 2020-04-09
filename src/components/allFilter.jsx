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
      className={`pa3 br-pill ba bw1 b--near-white fw5 black pointer nowrap f5`}
      style={{
        color: isAll ? "white" : "rgba(0,0,0,.4)",
        background:
          !isAll && !isHovered
            ? "black"
            : !isAll && isHovered
            ? "#f3f3f3"
            : "black",
        // backgroundColor: getBackgroundColor(),
      }}
    >
      All
    </div>
  )
}

export default AllFilter
