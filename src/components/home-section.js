import React, { Component, useState } from "react"
import PostList from "./postList"

const HomeSection = ({ title, date, description, posts }) => {
  const sectionPosts = posts.filter(
    item =>
      item.node.frontmatter.category === title &&
      item.node.frontmatter.published === true
  )
  return (
    <div className={"w-100 flex flex-row-l flex-column bt bw2 mb7"}>
      <div className="pt5 w-100">
        <h2 className={"pb4 f2 mt0 pt0 sans b"}>{title}</h2>
        {/* <p className={"f2 pt3 lh-copy measure-narrow  mr4 neue-regular mb5"}>
          {description}
        </p> */}
        <PostList posts={sectionPosts} />
      </div>
    </div>
  )
}

export default HomeSection
