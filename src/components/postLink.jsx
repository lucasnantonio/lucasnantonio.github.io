import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function PostLink ({ post, index }) {
  return (
    <Link className={`link black w-third flex flex-column ${index === 0 && 'mr4'}`} to={post.frontmatter.path}>
      <Img className="w-100 br3 " fluid={post.frontmatter.cover_image.childImageSharp.fluid}></Img>
      <p className={'neue-regular'}>{ post.frontmatter.title }</p>
    </Link>
  )
}

export default PostLink
