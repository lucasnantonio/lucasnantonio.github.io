import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"

const Hello = () => {
  return (
    <div className="flex pt6 pb6">
      <div className="w-25"></div>
      <div className="f3 lh-copy pt5 w-75 measure-narrow">
        <span className="neue-regular">Designer at Petal, in New York.</span>
        <br />
        <span className="neue-regular">
          I help companies cultivate customer understanding, design useful and
          empowering products, and grow healthy, productive design teams.
        </span>
      </div>
    </div>
  )
}

export default Hello
