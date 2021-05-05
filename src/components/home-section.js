import { motion } from "framer-motion"
import React from "react"
import { minWidth } from "../components/utils"
import PostList from "./postList"

const HomeSection = ({ posts }) => {
  const sectionPosts = posts.filter(
    item => item.node.frontmatter.published === true
  )
  return (
    <div style={{ maxWidth: minWidth }} className="center">
      <div className={"w-100 flex flex-row "}>
        <PostList posts={sectionPosts} />
      </div>
    </div>
  )
}

export default HomeSection
