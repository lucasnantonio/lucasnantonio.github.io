import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "../components/utils"
import TwitterLogo, { twitterLogo } from "../components/twitterLogo"
import { minWidth } from "./utils"
import { Link } from "gatsby"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Hello = ({ setSelectedTopics, setAll }) => {
  const [visitor, setVisitor] = useState(null)
  function getVisitor() {
    if (window.location.search.indexOf("ref") != 1) {
      setVisitor(window.location.search.split("?")[1])
    }
  }
  useEffect(() => getVisitor())

  function setTopic(item) {
    setAll(false)
    setSelectedTopics([item])
  }

  return (
    <div>
      <div className="w-100 flex center mb0" style={{ maxWidth: minWidth }}>
        <div className="w-100 mv6 flex justify-between">
          <div
            style={{ maxWidth: minWidth }}
            className="flex flex-column tracked-tight"
          >
            <motion.div
              initial={initialFadeAnimation}
              animate={fadeInAnimation}
              transition={{ duration: 0.5 }}
            >
              {visitor ? (
                <h1 className="f3 black lh-title mb0 fw5">
                  {visitor &&
                    `Hi there, ${capitalizeFirstLetter(
                      atob(visitor)
                    )}! My name is Lucas.`}
                </h1>
              ) : (
                <h1 className="f3 black lh-title mb0 fw5">Lucas Neumann</h1>
              )}
              <p className="f3 black-40 lh-copy mt0 fw5 measure mt2">
                {`Product designer at Twitter`}
              </p>
            </motion.div>
          </div>
          <TwitterLogo />
        </div>
      </div>
    </div>
  )
}

export default Hello
