import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PostLink from './postLink'

const PostList = ({ posts }) => {
  const list = posts
    .map((post, index) => <PostLink index={index} key={post.node.id} post={post.node} />)

  return <div style={{ marginLeft: '-1rem' }} className={'w-100 flex flex-wrap'}>{list}</div>
}

export default PostList
