import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import Feedback from "../components/feedback"
import { minWidth } from "../components/utils"

const Footer = () => {
  return (
    <div
      className="mv5 flex flex-row-l flex-column justify-between center items-start bg-near-white pa5 br3"
      style={{ maxWidth: minWidth }}
    >
      <div className=" flex flex-column mb0-l mb4">
        <p className="mt0 black-80">Get in touch</p>
        <div className="flex flex-row-l flex-column">
          <a
            className="link black-40 hover-black-80 underline-hover mr3 mb0-l mb3"
            href="mailto:lucasneumann.fau@gmail.com"
          >
            Email
          </a>
          <a
            target="_blank"
            className="link black-40 hover-black-80 underline-hover mr3 mb0-l mb3"
            href="https://www.linkedin.com/in/lucasneumann/"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            className="link black-40 hover-black-80 underline-hover mr3 mb0-l mb3"
            href="https://medium.com/@lucasnantonio"
          >
            Medium
          </a>
          <a
            target="_blank"
            className="link black-40 hover-black-80 underline-hover mr3 mb0-l mb3"
            href="https://twitter.com/@lucasnantonio"
          >
            Twitter
          </a>
          <a
            target="_blank"
            className="link black-40 hover-black-80 underline-hover mr3 mb0-l mb3"
            href="https://github.com/lucasnantonio"
          >
            Github
          </a>
        </div>
      </div>
      <Feedback></Feedback>
    </div>
  )
}

export default Footer
