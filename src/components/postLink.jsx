import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function PostLink (props) {
  const { post, size } = props
  return (
    <Link className={`flex flex-column pointer b f5 pr3 mb5 ${size}`} style={{ textDecoration: 'none', color: 'black' }} to={post.frontmatter.path}>
      <div className='w-100'>
        <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid} alt=""></Img>
      </div>
      <div className='fw4 f5 mt3'>
        { post.frontmatter.title }
      </div>
    </Link>
  )
}

export default PostLink
