import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"
import { minWidth } from "../components/utils"
import Feedback from "../components/feedback"

const Footer = () => {
  return (
    <div
      className="pv5 mt5 f4 w-100"
    >
      <div className="pt4 bt bw2 b--black ph0-l ph4 flex flex-row-l flex-column justify-between center items-start" style={{ maxWidth: minWidth }}>

        <div className=" flex flex-column lh-copy mb0-l mb4">
          <p className="mt0 black-80 fw6">Get in touch</p>
          <div className="flex flex-row-l flex-column fw5">
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
            <a
              target="_blank"
              className="link black-40 hover-black-80 underline-hover mr3"
              href="https://github.com/lucasnantonio"
            >
              Github
        </a>
          </div>
        </div>
        <Feedback></Feedback>
      </div>
    </div>
  )
}

export default Footer
