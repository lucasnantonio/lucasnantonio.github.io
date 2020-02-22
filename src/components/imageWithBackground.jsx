/* eslint-disable react/prop-types */
import React, { useState } from "react"
import Img from "gatsby-image/withIEPolyfill"
import { backgroundGray } from "./utils"

function ImageWithBackground({ fluid, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        // padding: "2rem",
      }}
    >
      <Img
        className="h-auto-l"
        backgroundColor="#f0f0f0"
        fluid={fluid}
        objectFit="contain"
      ></Img>
    </div>
  )
}

export default ImageWithBackground
