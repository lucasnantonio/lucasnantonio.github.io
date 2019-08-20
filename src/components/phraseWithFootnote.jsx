import React, { useState } from 'react'

const PhraseWithFootnote = ({ index, phrase, number, selectedPhrase, setSelectedPhrase }) => {
  return (
    <span
      className={'pointer'}
      onMouseEnter={() => { setSelectedPhrase(index) }}
    >
      <span className={` ${index === selectedPhrase ? 'underline' : ''} lh-copy black`}>{phrase}</span>
    </span>
  )
}

export default PhraseWithFootnote
