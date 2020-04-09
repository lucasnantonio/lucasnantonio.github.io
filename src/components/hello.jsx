import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "../components/utils"
import { minWidth } from "./utils"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Hello = ({ setSelectedTopics, setAll }) => {
  const [visitor, setVisitor] = useState(null)
  function getVisitor() {
    setVisitor(window.location.search.split("?")[1])
  }
  useEffect(() => getVisitor())

  function setTopic(item) {
    setAll(false)
    setSelectedTopics([item])
  }

  return (
    <div className="w-100 bg-near-white pv5 mb4">
    <div 
    style={{maxWidth: minWidth}}
    className="flex flex-column mb5 tracked-tight center">
      <motion.div 
      initial={initialFadeAnimation} animate={fadeInAnimation} transition={{duration: .5}}>
        <h1 className="f2-l f3 neue-regular black lh-title mb0 fw5">
          {visitor && `Hi there, ${capitalizeFirstLetter(atob(visitor))}!`}
        </h1>
        <p className="f2-l f3 measure-narrow black-40 lh-copy mt0 fw5">
        <br />I help companies design and deliver empowering
          experiences.&nbsp;
          <a
            className="link black-40 underline-hover hover-black"
            href="http://www.nubank.com.br/en"
            target="blank"
            style={{ cursor: "ne-resize" }}
          >
            Nubank
          </a>{" "}
          alumnus, now leading product design at{" "}
          <a
            className="link black-40 underline-hover hover-black"
            href="http://www.petalcard.com"
            target="blank"
            style={{ cursor: "ne-resize" }}
          >
            Petal
          </a>
          .
        </p>
      </motion.div>
    </div>
    </div>
  )
}

export default Hello
