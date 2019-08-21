import React, { useState } from 'react'
const Tag = (props) => {
  const [isHovered, setHovered] = useState(false)
  const style = {
    fontSize: '.8em',
    border: `1px solid ${!isHovered ? 'rgba(0,0,0,.2)' : 'black'}`,
    color: `${!isHovered ? 'rgba(0,0,0,.7)' : 'black'}`,
    display: 'inline-block',
    marginBottom: '.6rem',
    textAlign: 'left',
    padding: '0rem .4rem .2rem',
    verticalAlign: 'middle',
    lineHeight: '1.2rem',
    cursor: 'pointer'
  }
  return (
    <div style={style} onMouseEnter={(() => setHovered(true))} onMouseLeave={(() => setHovered(false))}>
      {props.title}
    </div>
  )
}

export default Tag
