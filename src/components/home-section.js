import React, { Component, useState } from 'react'
import PostList from './postList'
import Img from 'gatsby-image'
import { CSSTransition } from 'react-transition-group'

const HomeSection = ({ title, date, mainImage, description, posts }) => {
  console.log(posts)
  const sectionPosts = posts.filter((item) => item.node.frontmatter.category === title && item.node.frontmatter.published === 'true')
  const [image, setImage] = useState(mainImage)
  return (
    <div className={'bt bw1 b--light-gray pt2 mt5 flex flex-row-l flex-column'}>
      <div className={'w-50-l mr3'}>
        <div className="flex justify-between">
          <h2 className={'f3 mt0 pt0 sans b'}>{title}</h2>
          {/* <p className={'f3 mt0 pt0 black-40'}>{date}</p> */}
        </div>
        <p className={'f3 pt0 lh-copy measure mt4 mr4 black-40' }
        >{description}</p>
        <PostList posts={sectionPosts} setImage={setImage} mainImage={mainImage}/>
      </div>
      <Img className={'w-50-l'} fluid={image} />
    </div>)
}

export default HomeSection
