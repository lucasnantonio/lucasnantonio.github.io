import { motion } from "framer-motion"
import React from "react"
import { minWidth } from "../components/utils"
import PostList from "./postList"

const HomeSection = ({ posts }) => {
  const sectionPosts = posts.filter(
    item => item.node.frontmatter.published === true
  )
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      style={{ maxWidth: minWidth }}
      className="center"
    >
      <div className={"w-100 flex flex-row "}>
        <PostList posts={sectionPosts} />
      </div>
    </motion.div>
  )
}

export default HomeSection
