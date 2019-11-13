import React, { useState, useEffect } from "react"

function Filter({
  title,
  selectedSizes,
  selectedTopics,
  setSelectedTopics,
  setSelectedSizes,
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
  const getBackgroundColor = () => {
    if (isSelected) {
      return "#222"
    }
    if (isHovered) {
      return "#f7f7f7"
    }
    return "#fff"
  }
  const getColor = () => {
    if (isSelected) {
      return "white"
    }
    return "#222"
  }
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setSelected(!isSelected)
        addOrRemoveTopics(title, selectedTopics)
      }}
      className={`black br-pill ba b--near-white bw1 pointer pv2 ph3 neue-regular mr3 db nowrap`}
      style={{ backgroundColor: getBackgroundColor(), color: getColor() }}
    >
      {title}
    </li>
  )
}

export default Filter
