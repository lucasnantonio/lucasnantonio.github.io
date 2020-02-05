import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"

const Footer = () => {
  return (
    <div className="flex mb6 mt3 bt b--near-white bw1 pt4 items-center">
      <p className="mr3">Lucas Neumann © 2009–2020</p>
      <a
        className="link black underline-hover mr3"
        href="mailto:lucasneumann.fau@gmail.com"
      >
        Email me
      </a>
      <a
        className="link black underline-hover mr3"
        href="https://www.linkedin.com/in/lucasneumann/"
      >
        LinkedIn
      </a>
    </div>
  )
}

export default Footer
