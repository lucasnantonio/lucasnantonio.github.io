import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"

const Hello = () => {
  return (
    <div className="flex pt6 mt5 pb7">
      <div className="lh-copy">
        <span className="f1 neue-regular measure-narrow">
          Designer at Petal, in New York.
        </span>
        <br />
        <p className="f2 black-40 measure-narrow lh-title">
          I help companies cultivate user research, design useful, empowering
          products, and grow healthy, productive design teams.
        </p>
      </div>
    </div>
  )
}

export default Hello
