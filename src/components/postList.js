import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PostLink from './postLink'

const PostList = (props) => {
  const [isListDimmed, setListDim] = useState(false)
  const { setImage, posts } = props

  const list = posts
    .map(post => <PostLink setImage={setImage} isListDimmed={isListDimmed} key={post.node.id} post={post.node} />)

  return <div className={'w-100'} onMouseOver={() => setListDim(true)} onMouseLeave={() => { setListDim(false); setImage(props.mainImage) }}>{list}</div>
}

export default PostList
