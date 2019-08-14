import React, { Component, useState, useEffect } from 'react'
import PostList from './postList'
import Img from 'gatsby-image'
import { CSSTransition } from 'react-transition-group'

const HomeSection = ({ title, date, mainImage, description, posts }) => {
  const sectionPosts = posts.filter((item) => item.node.frontmatter.category === title && item.node.frontmatter.published === true)

  const [image, setImage] = useState(mainImage)

  const myDiv = null
  // window.onscroll = () => console.log(myDiv)

  useEffect(() => {
    // myDiv = document.getElementById(title)
    // console.log(myDiv)
  })

  return (
    <div key={title} id={title} className={'pt4 pb5 flex flex-row-l flex-column home-section'}>
      <div className="w-100 pt3 mb5">
        <h2 className={'f2 lighter fw5 mt0 pt0 sans b fw4 bt bw1 pt3 lh-copy'}>{title}</h2>
        <p className={'f3 pt0 lh-copy measure-narrow mt4 mr4 black-50 mb5' }>{description}</p>
        <PostList posts={sectionPosts} setImage={setImage} mainImage={mainImage}/>
      </div>
    </div>)
}

export default HomeSection
