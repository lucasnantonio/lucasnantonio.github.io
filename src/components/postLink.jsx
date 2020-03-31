/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ImageWithBackground from "./imageWithBackground"
import Tag from "./Tag"
import { backgroundGray } from "./utils"

function PostLink({ post, index }) {
  const topicTags = post.frontmatter.topics.map(item => {
    return <Tag key={item} title={item} />
  })
  const [isHovered, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(!post.frontmatter.soon && true)}
      onMouseLeave={() => setHover(false)}
      style={{ pointerEvents: post.frontmatter.soon && "none" }}
      className={`
      pr4-l
      ${post.frontmatter.size !== "large" ? "w-50-l w-100" : "w-100"}
        link black fl flex flex-column  pb1
        `}
      to={!post.frontmatter.soon ? post.frontmatter.path : null}
    >
      <div className="br3 overflow-hidden relative">
        <ImageWithBackground
          cover={post.frontmatter.cover}
          isHovered={isHovered}
          image={post.frontmatter.cover_image}
          color={post.frontmatter.color}
        />
      </div>
      <div
        style={{ minHeight: "13rem" }}
        className="black pb4 mt2 flex justify-between"
      >
        <div className="w-100">
          <div className="flex justify-between items-center">
            <p
              className={`neue-regular f3-l f4 measure-narrow mt3 mb3 ${
                isHovered ? "u underline" : ""
              }`}
            >
              {post.frontmatter.title}{" "}
            </p>
          </div>
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
            {post.frontmatter.soon && (
              <span className="f7 mr2 pv2  ph3 ba br-pill b--near-white bg-near-white dib br1 black-80 fl dib flex flex-column justify-center h1">
                Coming Soon
              </span>
            )}
            {topicTags}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostLink
