import React, { Component, useState } from "react"
import PostList from "./postList"

const HomeSection = ({ title, date, description, posts }) => {
  const sectionPosts = posts.filter(
    item =>
      item.node.frontmatter.category === title &&
      item.node.frontmatter.published === true
  )
  return (
    <div
      className={
        "w-100 flex flex-row-l flex-column mb6 mt4 bt b--near-white bw1"
      }
    >
      <div className="pt5 w-100">
        <div className="flex mb4">
          <h2 className={"w-50 pb2 f3 mt0 pt0 sans neue-regular"}>{title}</h2>
          <p
            className={"f3 neue-regular lh-copy measure w-50 mr4 black-40 mt0"}
          >
            {description}
          </p>
        </div>
        <PostList posts={sectionPosts} />
      </div>
    </div>
  )
}

export default HomeSection
