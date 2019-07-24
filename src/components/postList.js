import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PostLink from './postLink'

const PostList = (props) => {
  const [isListDimmed, setListDim] = useState(false)
  const { setColor } = props

  const list = props.posts
    .map(post => <PostLink setColor={setColor} isListDimmed={isListDimmed} key={post.node.id} post={post.node} />)

  return <div className={'mt5'} onMouseOver={() => setListDim(true)} onMouseLeave={() => setListDim(false)}>{list}</div>
}

export default PostList
