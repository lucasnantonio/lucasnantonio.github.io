import React, { useState } from "react"

function Filter({ title }) {
  const [isHovered, setHover] = useState(false)
  const [isSelected, setSelected] = useState(false)

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
      onClick={() => setSelected(!isSelected)}
      className={`black br-pill ba b--near-white bw1 pointer pv2 ph3 neue-regular mr3 db nowrap`}
      style={{ backgroundColor: getBackgroundColor(), color: getColor() }}
    >
      {title}
    </li>
  )
}

export default Filter
