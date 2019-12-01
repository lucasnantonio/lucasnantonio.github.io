import React, { Component, useState } from "react"
import PostList from "./postList"

const HomeSection = ({ title, date, description, posts }) => {
  const sectionPosts = posts.filter(
    item =>
      item.node.frontmatter.category === title &&
      item.node.frontmatter.published === true
  )
  return (
    sectionPosts.length > 0 && (
      <div
        className={
          "w-100 flex flex-row-l flex-column mb6 mt4 bt b--near-white bw1"
        }
      >
        <div className="pt5 w-100">
          <div className="flex mb4">
            <h2 className={"w-100 pb2 f4 mt0 pt0 sans neue-regular black"}>
              {title}
            </h2>
            <p className={"f4 neue-regular lh-copy w-100 black-40 mt0"}>
              {description}
            </p>
          </div>
          <PostList posts={sectionPosts} />
        </div>
      </div>
    )
  )
}

export default HomeSection
