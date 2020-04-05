import React, { useState } from "react"

const PostSummaryItem = ({ post }) => {
  return (
    <div className="mr5 w-100 mb0-ns mb4 measure">
    <h4 className="fw6 f4 mt3 mb0 flex center items-center">{ic_problem} <span className="ml2">Problem</span> </h4>
    <p className="lh-copy fw5 f4 black-40">{frontmatter.problem}</p>
  </div>

  )
}

export default PostSummaryItem
