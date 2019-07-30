import React, { useState } from 'react'

const circledNumberStyle = (hover, allPhrases) => {
  return {
    padding: '0em 0.6em .3em',
    borderRadius: '100%',
    fontSize: '.5em',
    border: !allPhrases && hover ? '1px solid black'
      : !allPhrases && !hover ? '1px solid rgba(0,0,0,.01)' : '1px solid rgba(0,0,0,.1)',
    fontWeight: '400',
    verticalAlign: '.7rem',
    backgroundColor: hover ? 'black' : 'white',
    color: !allPhrases && hover ? 'white'
      : !allPhrases && !hover ? 'rgba(0,0,0,.1)' : 'black'
  }
}

const PhraseWithFootnote = ({ phrase, number, setAllPhrases, allPhrases }) => {
  const [hover, setHover] = useState(false)
  return (
    <span
      className={'pointer'}
      onMouseEnter={() => { setHover(true); setAllPhrases(false) }}
      onMouseLeave={() => { setHover(false); setAllPhrases(true) }}>
      <span className={`${!hover && !allPhrases ? 'black-10' : 'black-50'}`}>{phrase}</span>
      <span style={circledNumberStyle(hover, allPhrases)}>{number}</span>
    </span>
  )
}

export default PhraseWithFootnote
