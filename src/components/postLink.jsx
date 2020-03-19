/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ImageWithBackground from "./imageWithBackground"
import Tag from "./Tag"
import { backgroundGray } from "./utils"

function PostLink({ post, index }) {
  const topicTags = post.frontmatter.topics.map(item => {
    return <Tag title={item} />
  })
  const [isHovered, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={` 
      ${index % 2 == 0 && "pr3-ns"}
      ${index % 2 != 0 && "pl3-ns"}
      ${post.frontmatter.size !== "large" ? "w-25-ns w-100" : "w-50-ns w-100"}
        link black fl flex flex-column  pb3
        `}
      to={post.frontmatter.path}
    >
      <div className="br2 overflow-hidden">
        <ImageWithBackground
          cover={post.frontmatter.cover}
          isHovered={isHovered}
          fluid={post.frontmatter.cover_image.childImageSharp.fluid}
          color={post.frontmatter.color}
        />
      </div>
      <div
        style={{ minHeight: "12rem" }}
        className="black pb4 mt2 flex justify-between"
      >
        <div className="mr3 w-100">
          <p
            className={`neue-regular f3-l f4 measure-narrow mt3 mb3 ${
              isHovered ? "u underline" : ""
            }`}
          >
            {post.frontmatter.title}
          </p>
          <p
            className={
              "f4-l f5 black-40 neue-regular lh-copy pv0 mb0 mt0 w-100"
            }
          >
            {post.frontmatter.subtitle}
          </p>
          <div
            style={{ marginLeft: "-.2rem" }}
            className="mono mt3 pt1 flex tr items-start"
          >
            {topicTags}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostLink
