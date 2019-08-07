import React, { useState } from 'react'

const circledNumberStyle = (selectedPhrase, key) => {
  return {
    padding: '0em 0.6em .3em',
    borderRadius: '100%',
    fontSize: '.5em',
    border: selectedPhrase === key ? '1px solid black'
      : selectedPhrase === 0 ? '1px solid rgba(0,0,0,.1)'
        : '1px solid rgba(0,0,0,.1)',
    fontWeight: '400',
    verticalAlign: '.3rem',
    marginLeft: '.3rem',
    backgroundColor: selectedPhrase === key ? 'black' : 'white',
    color: selectedPhrase === key ? 'white'
      : selectedPhrase === 0 ? 'rgba(0,0,0,.5)'
        : 'rgba(0,0,0,.5)'
  }
}

const PhraseWithFootnote = ({ index, phrase, number, selectedPhrase, setSelectedPhrase }) => {
  return (
    <span
      className={'pointer'}
      onMouseEnter={() => { setSelectedPhrase(index) }}
      // onMouseLeave={() => { setSelectedPhrase(0) }}
    >
      <span className={`${index === selectedPhrase ? 'black' : selectedPhrase === 0 ? 'black-50' : 'black-50'}`}>{phrase}</span>
      <span style={circledNumberStyle(selectedPhrase, index)}>{number}</span>
    </span>
  )
}

export default PhraseWithFootnote
