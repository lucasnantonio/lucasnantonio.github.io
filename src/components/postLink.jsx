/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ImageWithBackground from "./imageWithBackground"
import Tag from "./Tag"
import { backgroundGray } from "./utils"
import tinycolor from "tinycolor2"
import { motion, AnimatePresence } from "framer-motion"

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}
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
      ${!isEven(index) ? "pl3-l" : "pr3-l"}
      ${post.frontmatter.size !== "large" ? "w-50-l w-100" : "w-100"}
        link black fl flex flex-column  pb1
        `}
      to={!post.frontmatter.soon ? post.frontmatter.path : null}
    >
      <div className="overflow-hidden relative">
        <AnimatePresence>
          {isHovered &&
        <motion.div 
        transition={{ ease: "easeOut", duration: .25 }}
        initial={{ opacity: 0, top: "100%", scale: 1 }}
        animate={{ opacity: 1, top: "100%", scale: 2 }}
        exit={{ opacity: 0, top: "100%", scale: 1 }}
        // style={{backgroundColor: tinycolor(post.frontmatter.color).darken(4), position:"absolute", top:"50%"}} 
        className="w-100 h-100 br-100">

        </motion.div>
          }
        </AnimatePresence>
        <ImageWithBackground
          cover={post.frontmatter.cover}
          isHovered={isHovered}
          image={post.frontmatter.cover_image}
          color={post.frontmatter.color}
        />
        {post.frontmatter.soon && (
          <span
            style={{ position: "absolute", bottom: ".75rem", left: ".75rem" }}
            className="black-50 f7 mr2 pv1  ph2 bg-white-80 dib br2 black-80 fl dib flex flex-column justify-center h1"
          >
            Coming Soon
          </span>
        )}
      </div>
      <div
        style={{ minHeight: "11rem" }}
        className="black pb4 mt2 flex justify-between"
      >
        <div className="w-100">
          <div className="flex justify-between items-center">
            <p
              className={`neue-regular f3-l f4 measure-narrow mt3 mb3 fw5 tracked-tight ${
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
            {/* {topicTags} */}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostLink
