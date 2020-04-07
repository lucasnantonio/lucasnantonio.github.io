import React, { useState, useEffect } from "react"
import { minWidth, topics, sizes } from "../components/utils"

function Filter({ title, selectedTopics, setSelectedTopics, isAll, setAll }) {
  const [isHovered, setHover] = useState(false)
  const [isSelected, setSelected] = useState(false)

  const addOrRemoveTopics = (title, selectedTopics) => {
    if (title === "All") {
      setSelectedTopics(topics)
      setAll(true)
      return
      // }
      // if (isSelected && selectedTopics.length === 1) {
      //   setSelectedTopics(topics)
      //   setAll(true)
      // }
      // if (!isSelected) {
      // const joined = selectedTopics.filter(item => item !== title).concat(title)
      // setSelectedTopics([title])
    } else {
      setSelectedTopics([title])
      setAll(false)
    }
  }
  useEffect(() => setSelected(!isAll && selectedTopics.includes(title)))

  const getBackgroundColor = () => {
    if (!isAll && isSelected) {
      return "#000"
    }
    if (isHovered) {
      return "#f7f7f7"
    } else {
      return "transparent"
    }
  }

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        addOrRemoveTopics(title, selectedTopics)
      }}
      className={`ph3 pv3 br-pill bw1 b--near-white ba tc black pointer nowrap f4 ma0 pb3 mr3 fw5`}
      style={{
        color: isSelected ? "white" : "rgba(0,0,0,.4)",
        background:
          !isSelected && !isHovered
            ? "white"
            : !isSelected && isHovered
            ? "#f3f3f3"
            : "black",
        // backgroundColor: getBackgroundColor(),
      }}
    >
      {title}
    </li>
  )
}

export default Filter
