import React, { useState } from 'react'
import { Link } from 'gatsby'

function PostLink (props) {
  const { post, isListDimmed } = props
  const [isHovered, setHover] = useState(false)
  return (
    <Link className={`flex flex-column pointer b f5 w-100`} style={{ textDecoration: 'none', color: 'black' }} to={post.frontmatter.path}>
      <div

        onMouseOver={() => { setHover(!isHovered); props.setImage(post.frontmatter.cover_image.childImageSharp.fluid) }}
        onMouseLeave={() => { setHover(!isHovered) }}
      >
        <div className='h5 bg-pink w-100 '></div>
        <div className='fw4 f5 mt3'>
          { post.frontmatter.title }
        </div>
      </div>
    </Link>
  )
}

export default PostLink
