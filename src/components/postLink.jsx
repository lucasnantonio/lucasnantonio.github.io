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
      className={` ${
        post.frontmatter.size !== "large" ? "w-50-l w-100" : "w-100"
      }  
        link black relative fl pa2
        `}
      to={post.frontmatter.path}
    >
      <ImageWithBackground
        cover={post.frontmatter.cover}
        isHovered={isHovered}
        fluid={post.frontmatter.cover_image.childImageSharp.fluid}
        color={post.frontmatter.color}
      />
      <div
        className="bg-white black absolute w-50"
        style={{
          transition: "all .2s ease-in-out",
          overflow: "hidden",
          maxHeight: isHovered ? "800px" : "0px",
          padding: isHovered ? "1rem" : "0px",
          bottom: "1.5rem",
          left: "1.5rem",
          right: "0px",
        }}
      >
        <p className={"neue-regular f5 measure-narrow mb0"}>
          {post.frontmatter.title}
        </p>
        <p
          className={"f5 black-40 neue-regular lh-copy"}
          style={{
            transition: "all 2s ease-in-out",
          }}
        >
          {post.frontmatter.subtitle}
        </p>
      </div>
      {/* </div> */}
    </Link>
  )
}

export default PostLink
