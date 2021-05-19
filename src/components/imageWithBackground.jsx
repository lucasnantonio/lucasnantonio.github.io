/* eslint-disable react/prop-types */
import Img from "gatsby-image/withIEPolyfill"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import tinycolor from "tinycolor2"

function ImageWithBackground({ image, color, hover, id, tall }) {
  const [isHovered, setHover] = useState(false)
  return (
    <motion.div
      layoutId={`title+${id}+container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex center w-100 overflow-hidden relative br2  ${tall &&
        "pt6"}`}
      style={{
        backgroundColor: color,
        overflow: "hidden",
      }}
    >
      <motion.img
        layoutId={`title+${id}+img`}
        className="center"
        style={{ maxHeight: tall ? "42rem" : "32rem", zIndex: 1 }}
        src={image.src}
      />
      <AnimatePresence>
        {isHovered && hover && (
          <motion.div
            transition={{ ease: "easeOut", duration: 0.25 }}
            initial={{ opacity: 0, top: "100%", scale: 1 }}
            animate={{ opacity: 1, top: "100%", scale: 2 }}
            exit={{ opacity: 0, top: "100%", scale: 1 }}
            style={{
              backgroundColor: tinycolor(color).darken(4),
              position: "absolute",
              top: "50%",
              zIndex: "0",
            }}
            className="w-100 h-100 br-100"
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ImageWithBackground
