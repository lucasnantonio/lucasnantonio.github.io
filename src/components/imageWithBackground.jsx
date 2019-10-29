/* eslint-disable react/prop-types */
import React, { useState } from "react"
import Img from "gatsby-image"

function ImageWithBackground({
  fluid,
  color,
  snapToBottom = true,
  cover = false,
  isHovered,
}) {
  return (
    <div
      className={` flex flex-column center items-center br4 ${
        cover
          ? "pa0"
          : snapToBottom
          ? "ph4 pt4 justify-end"
          : "justify-around pa5"
      }`}
      style={{ backgroundColor: color, width: "100%", overflow: "visible" }}
    >
      <div className={`w-100`}>
        <Img
          style={{
            overflow: "show",
            transform: `scale(${isHovered ? "1.03" : "1"})`,
          }}
          fluid={fluid}
        ></Img>
      </div>
    </div>
  )
}

export default ImageWithBackground
