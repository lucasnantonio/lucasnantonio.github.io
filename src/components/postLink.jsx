/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ImageWithBackground from "./imageWithBackground"
import { backgroundGray } from "./utils"

function PostLink({ post, index }) {
  const topicTags = post.frontmatter.topics.map(item => {
    return (
      <p key={item} className="f7 pa2 ba b--black-10 dib br1 silver mr2">
        {item}
      </p>
    )
  })
  const [isHovered, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={` ${
        post.frontmatter.size !== "large" ? "w-25-l w-100" : "w-50-l w-100"
      }
        link black fl pr3 flex flex-column
        `}
      to={post.frontmatter.path}
    >
      <ImageWithBackground
        cover={post.frontmatter.cover}
        isHovered={isHovered}
        fluid={post.frontmatter.cover_image.childImageSharp.fluid}
        color={post.frontmatter.color}
      />
      <div className="black pb4 mt2 mr2 flex flex-column">
        <p
          className={`neue-regular f5 measure-narrow fw5 mt2 mb1 ${
            isHovered ? "u underline" : ""
          }`}
        >
          {post.frontmatter.title}
        </p>
        <p className={"f5 black-40 neue-regular lh-copy pv0 mb0 mt0"}>
          {post.frontmatter.subtitle}
        </p>
        <div className="mono" style={{ marginLeft: "-.2rem" }}>
          {topicTags}
        </div>
      </div>
    </Link>
  )
}

export default PostLink
