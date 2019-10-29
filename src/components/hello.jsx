import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"

const Hello = () => {
  return (
    <div className="flex pt6 mt5 pb7">
      <div className="f2 measure-narrow lh-copy">
        <span className="neue-regular">Designer at Petal, in New York.</span>
        <br />
        <span className="neue-regular black-40">
          I help companies cultivate customer understanding, design useful and
          empowering products, and grow healthy, productive design teams.
        </span>
      </div>
    </div>
  )
}

export default Hello
