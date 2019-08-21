import React, { Component, useState, useEffect } from 'react'
import PostList from './postList'
import Img from 'gatsby-image'
import { CSSTransition } from 'react-transition-group'

const HomeSection = ({ title, description, posts }) => {
  const sectionPosts = posts.filter((item) => item.node.frontmatter.category === title && item.node.frontmatter.published === true)

  return (
    <div key={title} className={'flex flex-row-l flex-column mt6'}>
      <div className="w-100 ">
        <div className="flex mb5">
          <h2 className={'w-50 f3 lighter fw5 mt0 pt0 sans b fw4 pt3 lh-copy'}>{title}</h2>
          <p className={'w-50 f5 pt0 lh-copy mr4' }>{description}</p>
        </div>
        <PostList posts={sectionPosts} />
      </div>
    </div>)
}

export default HomeSection
