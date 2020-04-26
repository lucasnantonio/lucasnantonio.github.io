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
      <div className={"w-100 flex flex-row mb3 pt4-ns"}>
        <div className="flex flex-column w-100">
          {isAll && (
            <div className="flex flex-column mb5">
              <div className="pa3 br-pill b--near-white ba mr3 flex bw1">{icon}</div>
              <h2
                className={
                  "w-10 mr4 lh-solid f3 mv0 pv0 sans neue-regular black-80 fw5 tracked-tight"
                }
              >
                {title}
              </h2>
              <h3 className="f3 fw5 tracked-tight mt3 black-40 measure">{`${
                title === "Nubank" ?
                  "Designing the world's most downloaded neobank app." :
                  title === "Petal" ?
                    "The future of honest, accessible credit."
                    :
                    "Personal and experimental"
                }
                `}</h3>
            </div>
          )}
          <PostList posts={sectionPosts} />
        </div>
      </div>
    )
  )
}

export default HomeSection
