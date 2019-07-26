import React, { useState } from 'react'
import { Link } from 'gatsby'

function PostLink (props) {
  const { post, isListDimmed } = props
  const [isHovered, setHover] = useState(false)
  console.log(post)
  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={post.frontmatter.path}>
      <div
        className={`pointer pv3 bt f6 ${isHovered ? 'pl2' : 'pl0'} ${isListDimmed && !isHovered ? 'black-20' : 'black'}`}
        onMouseOver={() => { setHover(!isHovered); props.setColor(post.frontmatter.color) }}
        onMouseLeave={() => { setHover(!isHovered) }}
      >
        { post.frontmatter.title }
      </div>
    </Link>
  )
}

export default PostLink
