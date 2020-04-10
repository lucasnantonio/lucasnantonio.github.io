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
    <div className="w-100 pt4 mb6">
    <div 
    style={{maxWidth: minWidth}}
    className="flex flex-column mb5 tracked-tight center">
      <motion.div 
      initial={initialFadeAnimation} animate={fadeInAnimation} transition={{duration: .5}}>
        {visitor ?
        <h1 className="f2 neue-regular black lh-title mb0 fw5">
          {visitor && `Hi there, ${capitalizeFirstLetter(atob(visitor))}!`}
        </h1> :
        <h1 className="f2 neue-regular black lh-title mb0 fw5">
        Lucas Neumann
      </h1>
}
        <p className="f2 black-40 lh-copy mt0 fw5 measure-narrow">
        <br />Helping companies research, design and deliver empowering
          experiences.&nbsp;
          <a
            className="link black-40 underline-hover hover-black"
            href="http://www.nubank.com.br/en"
            target="blank"
            style={{ cursor: "ne-resize" }}
          >
            Nubank
          </a>{" "}
          alumnus, I now lead design at{" "}
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
        <a className="f3 fw5 black-20 flex items-center pt4">
          Full bio <span className="f6 ml2">➜</span>
        </a>
      </motion.div>
    </div>
    </div>
  )
}

export default Hello
