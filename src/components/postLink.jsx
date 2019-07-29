import React, { useState } from 'react'
import { Link } from 'gatsby'

function PostLink (props) {
  const { post, isListDimmed } = props
  const [isHovered, setHover] = useState(false)
  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={post.frontmatter.path}>
      <div
        className={`flex justify-between pointer pv3 bt b--light-gray f6 ${isHovered ? 'pl2' : 'pl0'} ${isListDimmed && !isHovered ? 'black-20' : 'black'}`}
        onMouseOver={() => { setHover(!isHovered); props.setImage(post.frontmatter.cover_image.childImageSharp.fluid) }}
        onMouseLeave={() => { setHover(!isHovered) }}
      >
        <span>
          { post.frontmatter.title }
        </span>
        <span className={`${isHovered ? 'o-100' : 'o-0'}`}>‣</span>
      </div>
    </Link>
  )
}

export default PostLink
