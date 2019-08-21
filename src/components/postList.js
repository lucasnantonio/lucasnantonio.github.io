import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PostLink from './postLink'

const PostList = (props) => {
  const { posts } = props

  const list = posts
    .map((post, index) =>
      <PostLink size={index === 0 ? 'w-100' : 'w-50'} key={post.node.id} post={post.node} />)

  return <div className={'w-100 flex flex-wrap'}>{list}</div>
}

export default PostList
