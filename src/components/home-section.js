import React, { Component, useState } from "react"
import PostList from "./postList"
import { ic_petal_logo } from "../components/icons.js"


const HomeSection = ({ title, date, description, posts, isAll, icon }) => {
  const sectionPosts = posts.filter(
    item =>
      item.node.frontmatter.published === true
  )
  return (
    sectionPosts.length > 0 && (
      <div className={"w-100 flex flex-row mb3 pt4-ns"}>
 <PostList posts={sectionPosts} />
      </div >
    )
  )
}

export default HomeSection
