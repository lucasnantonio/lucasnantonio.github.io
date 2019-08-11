import React, { Component, useState } from 'react'
import PostList from './postList'
import Img from 'gatsby-image'
import { CSSTransition } from 'react-transition-group'

const HomeSection = ({ title, date, mainImage, description, posts }) => {
  console.log(posts)
  const sectionPosts = posts.filter((item) => item.node.frontmatter.category === title && item.node.frontmatter.published === 'true')
  const [image, setImage] = useState(mainImage)
  return (
    <div className={' pt3 mt5 flex flex-row-l flex-column'}>
      <div className={' w-50-l mr4'}>
        <div className="flex justify-between">
        </div>
        <Img className={''} fluid={image} />
      </div>
      <div className="w-50-l bt bw1 pt2">
        <h2 className={'f3 mt0 pt0 sans b'}>{title}</h2>
        <p className={'f3 pt0 lh-copy measure-narrow mt4 mr4 black-40 mb5' }>{description}</p>
        <PostList posts={sectionPosts} setImage={setImage} mainImage={mainImage}/>
      </div>
    </div>)
}

export default HomeSection
