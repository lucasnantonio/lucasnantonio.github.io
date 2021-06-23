import React from "react"

const PhraseWithFootnote = ({
  index,
  phrase,
  number,
  selectedPhrase,
  setSelectedPhrase,
}) => {
  return (
    <span
      className={"pointer"}
      onMouseEnter={() => {
        setSelectedPhrase(index)
      }}
    >
      <span
        className={`${
          index === selectedPhrase
            ? "black"
            : selectedPhrase === 0
            ? "black-50"
            : "black-50"
        } ${index > 4 ? "f3 black-50 lh-copy dib measure" : "f3 lh-copy"}`}
      >
        {phrase}
      </span>
    </span>
  )
}

export default PhraseWithFootnote
