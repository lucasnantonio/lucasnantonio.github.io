/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ImageWithBackground from "./imageWithBackground"

function PostLink({ post, index }) {
  const [isHovered, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={` ${post.frontmatter.size !== "large" ? "w-50" : "w-100"}  
        link black h-100 flex flex-column br4 pa3 relative
        `}
      style={{ backgroundColor: isHovered ? "#fafafa" : "#ffffff" }}
      to={post.frontmatter.path}
    >
      <ImageWithBackground
        snapToBottom={post.frontmatter.snapToBottom}
        isHovered={isHovered}
        fluid={post.frontmatter.cover_image.childImageSharp.fluid}
        color={post.frontmatter.color}
      />
      <div className="pl3 pt3">
        <p className={"neue-regular f4 measure-narrow mb2 mt3"}>
          {post.frontmatter.title}
        </p>
        <p className={"neue-regular f5 black-30 measure-narrow"}>
          {post.frontmatter.subtitle}
        </p>
      </div>
      {/* </div> */}
    </Link>
  )
}

export default PostLink
