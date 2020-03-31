import React, { Component, useState } from "react"
import PostList from "./postList"
import { ic_petal_logo } from "../components/icons.js"

const HomeSection = ({ title, date, description, posts, isAll, icon }) => {
  const sectionPosts = posts.filter(
    item =>
      item.node.frontmatter.category === title &&
      item.node.frontmatter.published === true
  )
  return (
    sectionPosts.length > 0 && (
      <div className={"w-100 flex flex-row mb3 pt5"}>
        <div className="flex flex-column w-100">
          {isAll && (
            <div className="flex items-center align-center mb5">
              <div className="pa3 br-pill b--black-10 ba mr3 flex">{icon}</div>
              <h2
                className={
                  "w-10 mr4 pb2 f2-l f3 mv0 pv0 sans neue-regular black fw5 tracked-tight"
                }
              >
                {title}
              </h2>
            </div>
          )}
          <PostList posts={sectionPosts} />
        </div>
      </div>
    )
  )
}

export default HomeSection
