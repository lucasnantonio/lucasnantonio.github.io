import React, { useState } from "react"
import { graphql } from "gatsby"
import PostLink from "./postLink"

const PostList = ({ posts }) => {
  const list = posts.map((post, index) => (
    <PostLink index={index} key={post.node.id} post={post.node} />
  ))

  return <div className={"cf center"}>{list}</div>
}

export default PostList
