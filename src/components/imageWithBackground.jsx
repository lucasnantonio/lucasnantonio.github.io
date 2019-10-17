import React, { useState } from 'react'
import Img from 'gatsby-image'

function ImageWithBackground ({ fluid, color, snapToBottom = true, isHovered }) {
  return (
    <div
      id="hehe"
      className={`w-100 h-100 center flex flex-column br4 overflow-hidden ${snapToBottom ? 'justify-end ph4 pt4' : 'justify-around pa4'}`}
      style={{ backgroundColor: color, width: '100%', height: '100%' }}
    >
      <Img
        // className={'h-100 w-100'}
        style={{ transform: `scale(${isHovered ? '1.1' : '1'})` }}
        // style={{ boxShadow: '0px 0px 18px rgba(0,0,0,.1)' }}
        // style={{
        //   filter: 'drop-shadow(0px 0px 15px rgba(0,0,0,.1))',
        //   WebkitFilter: 'drop-shadow(0px 0px 15px rgba(0,0,0,.1))'
        // }}
        // style={{ transform: `scale(${isHovered ? '1.1' : '1'})` }}
        fluid={fluid}></Img>
    </div>
  )
}

export default ImageWithBackground
