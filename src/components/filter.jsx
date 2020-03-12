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
      return "#eeeeee"
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
      className={`fw5 br-pill tc black pointer pa3 dib nowrap hover-bg-near-white f5-l f6-ns f7 ma0 mr2`}
      style={{
        color: isSelected ? "white" : "gray",
        border: !isSelected ? "2px solid #f7f7f7" : "2px solid #222",
        backgroundColor: getBackgroundColor(),
      }}
    >
      {title}
    </li>
  )
}

export default Filter
