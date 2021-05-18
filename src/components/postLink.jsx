import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"
import React, { useState } from "react"
import tinycolor from "tinycolor2"
import ImageWithBackground from "./imageWithBackground"
import Tag from "./Tag"

function PostLink({ post }) {
  const [isHovered, setHover] = useState(false)
  return (
    <div>
      <Link
        className="link black fl flex flex-column  pb1 w-100"
        to={post.frontmatter.path}
        style={{ backgroundColor: post.frontmatter.color }}
      >
        <div className="overflow-hidden relative br2">
          <div style={{ zIndex: "2" }}>
            <ImageWithBackground
              cover={post.frontmatter.cover}
              isHovered={isHovered}
              image={post.frontmatter.cover_image.childImageSharp.fluid}
              color={post.frontmatter.color}
            />
          </div>
        </div>
        <div
          style={{ minHeight: "11rem" }}
          className="black pb4 mt2 flex justify-between"
        >
          <div className="w-100">
            <div className="flex justify-between items-center">
              <motion.p
                layoutId={`title+${post.frontmatter.title}`}
                className={`f3 measure-narrow mt3 mb2 fw5 tracked-tight ${
                  isHovered ? "u underline" : ""
                }`}
              >
                {post.frontmatter.title}{" "}
              </motion.p>
            </div>
            <p
              className={
                "f3 fw5 tracked-tight black-40 lh-copy pv0 mb0 mt0 w-100"
              }
            >
              {post.frontmatter.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostLink
