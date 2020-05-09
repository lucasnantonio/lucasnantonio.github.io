import React from "react"
import { motion } from "framer-motion"
import Code from "../images/icons/Code.svg"
import Design from "../images/icons/Design.svg"
import DesignOps from "../images/icons/DesignOps.svg"
import Research from "../images/icons/Research.svg"
import { minWidth } from "../components/utils"

const skillList = {
  Research: {
    image: Research,
    text:
      "I invest a lot of time in listening to users, advocating for their needs, collaborating with researchers, and creating workflows so that the team feels connected to who they're designing for.",
    backgroundColor: "#E8F4FF",
  },
  "Product Design": {
    image: Design,
    text:
      "Understand the user, frame the problem, ideate, prototype, test, deliver, measure, repeat. I have designed products that have reached millions of people.",
    backgroundColor: "#FFF5D4",
  },
  "Design Ops": {
    image: DesignOps,
    text:
      "Designing design. Helping things scale at a healthy pace. Keeping the teams I work with happy, engaged and empowered.",
    backgroundColor: "#FDF5FF",
  },
  Code: {
    image: Code,
    text:
      "I'm a coding begginer and enthusiast. This portfolio website is in itself an experiment in learning React. Here are some other things I've played with:",
    backgroundColor: "aliceblue",
  },
}

export default function SkillSection({ skill }) {
  return (
    <div
      style={{ maxWidth: minWidth }}
      className="mt5 mb6 flex flex-column center  "
    >
      {Object.keys(skillList)
        .filter(item => item === skill)
        .map(skill => {
          return (
            <div
              key={skill}
              style={{ background: skillList[skill].backgroundColor }}
              className="h5 overflow-hidden relative w-100 center items-center pv5 ph4 flex f3 fw5 lh-copy black-40 tracked-tight "
            >
              <div className="z-max ml7 pl6 pr5 flex flex-column">
                {/* <h3 className="f3 fw6 mv0">{skill}</h3> */}
                <p className="mv0 measure">{skillList[skill].text}</p>
              </div>
              <motion.img
                key={skillList[skill]}
                initial={{
                  width: 500,
                  top: -80,
                  left: -170,
                  opacity: 0,
                }}
                animate={{
                  width: 600,
                  top: -150,
                  left: -190,
                  opacity: 1,
                }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  // transform: "scale(1.5)",
                  // transform: "rotate(-20deg)",
                }}
                src={skillList[skill].image}
              />
            </div>
          )
        })}
    </div>
  )
}
