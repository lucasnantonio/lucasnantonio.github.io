import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function PostLink ({ post, index }) {
  const [isHovered, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={
        `link black w-third flex flex-column br4 pa3
        `}
      style={{ backgroundColor: isHovered ? '#f7f7f7' : 'white' }}
      to={post.frontmatter.path}>
      <div className="w-100 br3 overflow-hidden">
        <Img
          style={{ transform: `scale(${isHovered ? '1.1' : '1'})` }}
          fluid={post.frontmatter.cover_image.childImageSharp.fluid}></Img>
      </div>
      <p className={'neue-regular pl2'}>{ post.frontmatter.title }</p>
    </Link>
  )
}

export default PostLink
