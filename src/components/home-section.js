import React, { Component, useState } from "react"
import PostList from "./postList"

const HomeSection = ({ title, date, description, posts, isAll }) => {
  const sectionPosts = posts.filter(
    item =>
      item.node.frontmatter.category === title &&
      item.node.frontmatter.published === true
  )
  return (
    sectionPosts.length > 0 && (
      <div className={"w-100 flex flex-row mb3 pt5"}>
        <div className="flex flex-row-l flex-column w-100">
          {isAll && (
            <h2
              className={"w-10 mr4 pb2 f3 mt0 pt0 sans neue-regular black fw5"}
            >
              {title}
            </h2>
          )}
          <PostList posts={sectionPosts} />
        </div>
      </div>
    )
  )
}

export default HomeSection
