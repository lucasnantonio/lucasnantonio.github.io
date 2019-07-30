import React, { useState } from 'react'

const circledNumberStyle = {
  padding: '0em 0.6em .3em',
  borderRadius: '100%',
  fontSize: '.5em',
  border: '1px solid rgba(0,0,0,.1)',
  fontWeight: '400',
  verticalAlign: '.7rem'
}

const PhraseWithFootnote = ({ phrase, number }) => {
  const [hover, setHover] = useState(false)
  return (
    <span className={'pointer'} onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
      <span className={`${hover ? 'black' : 'black-50'}`}>{phrase}</span>
      <span style={circledNumberStyle}>{number}</span>
    </span>
  )
}

export default PhraseWithFootnote
