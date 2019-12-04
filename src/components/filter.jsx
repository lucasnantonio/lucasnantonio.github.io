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

  // const getBackgroundColor = () => {
  //   if (!isAll && isSelected) {
  //     return "#222"
  //   }
  //   if (isHovered) {
  //     return "#f2f2f2"
  //   } else {
  //     return "#fff"
  //   }
  // }

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        addOrRemoveTopics(title, selectedTopics)
      }}
      className={`w-100 tc black pointer pt3 pb3 ph3 neue-regular dib nowrap f5`}
      style={{
        color: isSelected ? "#222" : "#949494",
        borderBottom: !isSelected ? "2px solid #ffffff" : "2px solid #222",
      }}
    >
      {title}
    </li>
  )
}

export default Filter
