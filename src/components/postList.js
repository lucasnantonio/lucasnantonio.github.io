import React from "react"
import PostLink from "./postLink"

const PostList = ({ posts }) => {
  const list = posts.map((post, index) => (
    <PostLink index={index} key={post.node.id} post={post.node} />
  ))

  return <div className={"cf w-100"}>{list}</div>
}

export default PostList
