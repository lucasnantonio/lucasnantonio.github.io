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
      return "#222"
    }
    if (isHovered) {
      return "#f2f2f2"
    } else {
      return "#fff"
    }
  }

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        addOrRemoveTopics(title, selectedTopics)
      }}
      className={`black br-pill pointer pv2 ph3 neue-regular mr3 dib nowrap f7`}
      style={{
        backgroundColor: getBackgroundColor(),
        color: !isSelected ? "#222" : "white",
        border: !isSelected ? "2px solid #f3f3f3" : "2px solid #222",
      }}
    >
      {title}
    </li>
  )
}

export default Filter
