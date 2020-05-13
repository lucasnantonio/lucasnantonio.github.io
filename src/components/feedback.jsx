import React, { useState } from "react"
import { motion } from "framer-motion"

const links = [
  "https://docs.google.com/forms/d/e/1FAIpQLSdAfwx_vRFGFGCRKnyJ19RkaE7ZZAhDPW-30RKjGsJnOjkuLQ/viewform?usp=pp_url&entry.1156352472=1",
  "https://docs.google.com/forms/d/e/1FAIpQLSdAfwx_vRFGFGCRKnyJ19RkaE7ZZAhDPW-30RKjGsJnOjkuLQ/viewform?usp=pp_url&entry.1156352472=2",
  "https://docs.google.com/forms/d/e/1FAIpQLSdAfwx_vRFGFGCRKnyJ19RkaE7ZZAhDPW-30RKjGsJnOjkuLQ/viewform?usp=pp_url&entry.1156352472=3",
  "https://docs.google.com/forms/d/e/1FAIpQLSdAfwx_vRFGFGCRKnyJ19RkaE7ZZAhDPW-30RKjGsJnOjkuLQ/viewform?usp=pp_url&entry.1156352472=4",
  "https://docs.google.com/forms/d/e/1FAIpQLSdAfwx_vRFGFGCRKnyJ19RkaE7ZZAhDPW-30RKjGsJnOjkuLQ/viewform?usp=pp_url&entry.1156352472=5",
]
const Star = ({ link, index, setHoveredIndex, isBlack }) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      href={link}
      target="_blank"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`f3 pointer link pr2 ${isBlack ? "black" : "black-40"}`}
    >
      {isBlack ? "★" : "☆"}
    </motion.a>
  )
}

const Feedback = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className="flex-column">
      <p className="f4 fw5 black mt0 lh-copy">
        Feedback is a gift. <br></br>How would you rate my work?
      </p>
      <div className="flex">
        {links.map((link, index) => {
          return (
            <Star
              isBlack={hoveredIndex != null && hoveredIndex >= index}
              index={index}
              key={link}
              link={link}
              setHoveredIndex={setHoveredIndex}
            ></Star>
          )
        })}
      </div>
    </div>
  )
}

export default Feedback
