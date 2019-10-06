import React, { useState } from 'react'

function Filter ({ title }) {
  const [isHovered, setHover] = useState(false)
  const [isSelected, setSelected] = useState(false)
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`black br-pill pointer pa3`}
      style={{ backgroundColor: isHovered ? '#f7f7f7' : '#ffffff' }}
    >
      {title}
    </li>
  )
}

export default Filter
