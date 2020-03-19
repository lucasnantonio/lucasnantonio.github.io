import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"
import { minWidth } from "../components/utils"
import Feedback from "../components/feedback"

const Footer = () => {
  return (
    <div
      style={{ maxWidth: minWidth }}
      className="flex center mb6 mt3 bt b--near-white bw1 pt4 items-center f5-l f7 w-100 justify-between"
    >
      <div className=" flex items-center">
        <p className="mr3">Lucas Neumann © Always</p>
        <a
          className="link black underline-hover mr3"
          href="mailto:lucasneumann.fau@gmail.com"
        >
          Email me
        </a>
        <a
          target="_blank"
          className="link black underline-hover mr3"
          href="https://www.linkedin.com/in/lucasneumann/"
        >
          LinkedIn
        </a>
      </div>
      <Feedback></Feedback>
    </div>
  )
}

export default Footer
