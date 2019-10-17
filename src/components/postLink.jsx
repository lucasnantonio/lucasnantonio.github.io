import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ImageWithBackground from './imageWithBackground'

function PostLink ({ post, index }) {
  const [isHovered, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={
        `link black w-50  h6 flex flex-column br4 pa3 relative
        `}
      style={{ backgroundColor: isHovered ? '#fcfcfc' : '#ffffff' }}
      to={post.frontmatter.path}>
      <ImageWithBackground snapToBottom={false} isHovered={isHovered} fluid={post.frontmatter.cover_image.childImageSharp.fluid} color={'#E5F8FF'}/>
      <div className="pl3 pt3">
        <p className={'neue-regular f4 measure-narrow mb2 mt3'}>{ post.frontmatter.title }</p>
        <p className={'neue-regular f5 black-30 measure-narrow'}>{ post.frontmatter.subtitle }</p>
      </div>
      {/* </div> */}
    </Link>
  )
}

export default PostLink
