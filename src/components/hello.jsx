import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"

const Hello = () => {
  return (
    <div className="flex pv6 mv5">
      <div className="lh-copy">
        <span className="f4 neue-regular measure-narrow black">
          Designer at Petal, in New York.
        </span>
        <br />
        <p className="f4 black-40 measure-narrow lh-title">
          I help companies cultivate user research, design empowering products,
          and grow healthy design teams.
        </p>
      </div>
    </div>
  )
}

export default Hello
