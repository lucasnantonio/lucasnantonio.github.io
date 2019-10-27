import React, { Component, useState } from 'react'
import PostList from './postList'

const HomeSection = ({ title, date, description, posts }) => {
  const sectionPosts = posts.filter((item) => item.node.frontmatter.category === title && item.node.frontmatter.published === true)
  return (
    <div className={' pt3 mt5 flex flex-row-l flex-column'}>
      <div className="w-third">

      </div>
      <div className="w-two-thirds bw1 bt b--near-white pt4">
        <h2 className={'f3 mt0 pt0 sans b'}>{title}</h2>
        <p className={'f4 pt4 lh-copy measure-narrow  mr4 black-40 mb5' }>{description}</p>
        <PostList posts={sectionPosts}/>
      </div>
    </div>)
}

export default HomeSection
