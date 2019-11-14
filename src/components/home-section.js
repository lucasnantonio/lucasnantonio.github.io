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
      <div className="pt6 w-100">
        <h2 className={"pb2 f1 mt0 pt0 sans b"}>{title}</h2>
        <p className={"f2 lh-copy measure-narrow  mr4 black-40 mb6"}>
          {description}
        </p>
        <PostList posts={sectionPosts} />
      </div>
    </div>
  )
}

export default HomeSection
