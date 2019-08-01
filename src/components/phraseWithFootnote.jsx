import React, { useState } from 'react'

const circledNumberStyle = (selectedPhrase, key) => {
  return {
    padding: '0em 0.6em .3em',
    borderRadius: '100%',
    fontSize: '.5em',
    border: selectedPhrase === key ? '1px solid black' : '1px solid rgba(0,0,0,.1)',
    fontWeight: '400',
    verticalAlign: '.7rem',
    backgroundColor: selectedPhrase === key ? 'black' : 'white',
    color: selectedPhrase === key ? 'white' : 'black'
  }
}

const PhraseWithFootnote = ({ index, phrase, number, selectedPhrase, setSelectedPhrase }) => {
  // const [hover, setHover] = useState(false)
  console.log(selectedPhrase)
  return (
    <span
      className={'pointer'}
      onMouseEnter={() => { setSelectedPhrase(index) }}
      onMouseLeave={() => { setSelectedPhrase(0) }}
    >
      <span className={`${selectedPhrase === index ? 'black-50' : 'black-10'}`}>{phrase}</span>
      <span style={circledNumberStyle(selectedPhrase, index)}>{number}</span>
    </span>
  )
}

export default PhraseWithFootnote
