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
      key="work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ maxWidth: minWidth }} className="center">
        <div className={"w-100 flex flex-row mb3"}>
          <PostList posts={sectionPosts} />
        </div>
      </div>
    </motion.div>
  )
}

export default HomeSection
