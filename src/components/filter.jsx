import React, { useState, useEffect } from "react"
import { minWidth, topics, sizes } from "../components/utils"

function Filter({
  title,
  selectedSizes,
  selectedTopics,
  setSelectedTopics,
  setSelectedSizes,
  isAll,
}) {
  const [isHovered, setHover] = useState(false)
  const [isSelected, setSelected] = useState(false)

  const addOrRemoveTopics = (title, selectedTopics) => {
    if (!isSelected) {
      const joined = selectedTopics.concat(title)
      setSelectedTopics(joined)
    } else {
      const index = selectedTopics.indexOf(title)
      const removed = selectedTopics.filter(i => i !== title)
      setSelectedTopics(removed)
    }
  }
  useEffect(() => setSelected(selectedTopics.includes(title)))
  console.log(isAll)
  console.log(selectedTopics)
  const getBackgroundColor = () => {
    if (selectedTopics.length !== topics && isSelected) {
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
        addOrRemoveTopics(title, selectedTopics)
      }}
      className={`black br-pill pointer pv2 ph3 neue-regular mr3 dib nowrap`}
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
