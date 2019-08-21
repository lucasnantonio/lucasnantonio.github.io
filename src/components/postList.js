import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PostLink from './postLink'

const PostList = (props) => {
  const { posts } = props

  const list = posts
    .map(post => <PostLink key={post.node.id} post={post.node} />)

  return <div className={'w-100 flex flex-column'}>{list}</div>
}

export default PostList
