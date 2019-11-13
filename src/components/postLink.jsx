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
      className={` ${post.frontmatter.size !== "large" ? "w-third" : "w-100"}  
        link black flex flex-column relative fl pa2
        `}
      style={
        {
          // border: isHovered ? "2px solid #eee" : "2px solid white",
        }
      }
      to={post.frontmatter.path}
    >
      <ImageWithBackground
        cover={post.frontmatter.cover}
        snapToBottom={post.frontmatter.snapToBottom}
        isHovered={isHovered}
        fluid={post.frontmatter.cover_image.childImageSharp.fluid}
        color={post.frontmatter.color}
      />
      <div className="pt4 pl4">
        <p className={"neue-regular f3 measure-narrow mb0 mt3"}>
          {post.frontmatter.title}
        </p>
        <p className={"mt2 f3 black-30 measure-narrow lh-copy"}>
          {post.frontmatter.subtitle}
        </p>
      </div>
      {/* </div> */}
    </Link>
  )
}

export default PostLink
