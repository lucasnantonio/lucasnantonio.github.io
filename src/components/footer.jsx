import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"
import { minWidth } from "../components/utils"
import Feedback from "../components/feedback"

const Footer = () => {
  return (
    <div
      className=" bg-near-white pv5 mt5 f4 w-100"
    >
      <div className=" ph4 flex flex-row-ns flex-column justify-between center items-start" style={{ maxWidth: minWidth }}>


        <div className=" flex flex-column lh-copy ">
          <p className="mt0 black-80 fw5">Lucas Neumann © Always</p>
          <a
            className="link black-40 hover-black-80 underline-hover mr3"
            href="mailto:lucasneumann.fau@gmail.com"
          >
            Email me
        </a>
          <a
            target="_blank"
            className="link black-40 hover-black-80 underline-hover mr3"
            href="https://www.linkedin.com/in/lucasneumann/"
          >
            LinkedIn
        </a>
          <a
            target="_blank"
            className="link black-40 hover-black-80 underline-hover mr3"
            href="https://medium.com/@lucasnantonio"
          >
            Medium
        </a>
          <a
            target="_blank"
            className="link black-40 hover-black-80 underline-hover mr3"
            href="https://twitter.com/@lucasnantonio"
          >
            Twitter
        </a>
        </div>
        <Feedback></Feedback>
      </div>
    </div>
  )
}

export default Footer
