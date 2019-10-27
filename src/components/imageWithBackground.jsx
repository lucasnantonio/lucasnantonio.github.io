/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Img from 'gatsby-image'

function ImageWithBackground ({ fluid, color, snapToBottom = true, isHovered }) {
  return (
    <div
      id="hehe"
      className={`w-100 h-100 center flex flex-column overflow-hidden ${snapToBottom ? 'justify-end ph4 pt4' : 'justify-around pa4'}`}
      style={{ backgroundColor: color, width: '100%', height: '100%' }}
    >
      <Img
        className={'w-100 mw5 center'}
        style={{ transform: `scale(${isHovered ? '1.03' : '1'})` }}
        fluid={fluid}></Img>
    </div>
  )
}

export default ImageWithBackground
