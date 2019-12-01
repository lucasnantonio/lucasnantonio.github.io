import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"

const Hello = () => {
  return (
    <div className="flex pt6   pb6">
      <div className="lh-copy">
        <span className="f3 neue-regular measure-narrow">
          Designer at Petal, in New York.
        </span>
        <br />
        <p className="f3 black-40 measure-narrow lh-title">
          I help companies cultivate user research, design empowering products,
          and grow healthy design teams.
        </p>
      </div>
    </div>
  )
}

export default Hello
