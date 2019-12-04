/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ImageWithBackground from "./imageWithBackground"
import { backgroundGray } from "./utils"

function PostLink({ post, index }) {
  const [isHovered, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={` ${
        post.frontmatter.size !== "large" ? "w-50-l w-100" : "w-100"
      }  
        link black relative fl pa1 flex flex-column
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
        className="black ph4 pb4 mt0"
        style={{
          bottom: "1.5rem",
          left: "1.5rem",
          backgroundColor: backgroundGray,
        }}
      >
        <p className={"neue-regular f5 measure-narrow mb0"}>
          {post.frontmatter.title}
        </p>
        <p
          className={"f5 black-40 neue-regular lh-copy mv0 pv0"}
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
