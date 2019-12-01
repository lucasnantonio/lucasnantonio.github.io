/* eslint-disable react/prop-types */
import React, { useState } from "react"
import Img from "gatsby-image/withIEPolyfill"

function ImageWithBackground({
  fluid,
  color,
  snapToBottom = true,
  cover = false,
  isHovered,
}) {
  return (
    <div
      style={{
        backgroundColor: !isHovered ? "#f0f0f0" : "#e7e7e7",
      }}
    >
      <Img
        className="h-auto-l"
        imgStyle={{
          transform: !isHovered ? "scale(1)" : "scale(1.02)",
        }}
        backgroundColor="#f0f0f0"
        fluid={fluid}
        objectFit="contain"
        // objectPosition="50% 50%"
      ></Img>
    </div>
  )
}

export default ImageWithBackground
