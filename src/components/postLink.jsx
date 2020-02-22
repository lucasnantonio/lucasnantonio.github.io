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
      className={` ${
        post.frontmatter.size !== "large" ? "w-25-l w-100" : "w-50-l w-100"
      }
        link black fl pr3 flex flex-column
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
      <div className="black pb4 mt2 flex justify-between">
        <div className="mr3 w-100">
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
        </div>
        <div
          className="mono mt2 flex items-start"
          style={{ marginLeft: "-.2rem" }}
        >
          {topicTags}
        </div>
      </div>
    </Link>
  )
}

export default PostLink
