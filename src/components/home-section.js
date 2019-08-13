import React, { Component, useState } from 'react'
import PostList from './postList'
import Img from 'gatsby-image'
import { CSSTransition } from 'react-transition-group'

const HomeSection = ({ title, date, mainImage, description, posts }) => {
  console.log(posts)
  const sectionPosts = posts.filter((item) => item.node.frontmatter.category === title && item.node.frontmatter.published === true)
  const [image, setImage] = useState(mainImage)
  return (
    <div className={'mb5 flex flex-row-l flex-column'}>
      {/* <div className={' w-50-l mr4'}>
        <div className="flex justify-between">
        </div>
        <Img className={''} fluid={image} />
      </div> */}
      <div style={{ borderTop: '1px solid black' }} className="w-100 pt2 mb5">
        <h2 className={'f5 mt0 pt0 sans b fw4'}>{title}</h2>
        <p className={'f5 pt0 lh-copy measure-narrow mt4 mr4 black-50 mb5' }>{description}</p>
        <PostList posts={sectionPosts} setImage={setImage} mainImage={mainImage}/>
      </div>
    </div>)
}

export default HomeSection
