import React, { Component, useState } from 'react'
import PostList from './postList'
import Img from 'gatsby-image'

const HomeSection = ({ title, date, description, posts }) => {
  const sectionPosts = posts.filter((item) => item.node.frontmatter.category === title)
  const [image, setImage] = useState('green')
  return (
    <div className={'bt pt3 mt5 flex flex-row-l flex-column'}>
      <div className={'w-50-l mr4'}>
        <div className="flex justify-between">
          <h2 className={'f3 mt0 pt0 sans b'}>{title}</h2>
          <p className={'f5 mt0 pt0 black-40'}>{date}</p>
        </div>
        <p className={'f6 pt0 lh-copy measure mt4' }
        >{description}</p>
        <PostList posts={sectionPosts} setImage={setImage}/>
      </div>
      {/* <div className="h6 w-50 pa5" style={{ backgroundColor: 'green' }}>haha</div> */}
      {console.log(posts[0].node.frontmatter.cover_image.childImageSharp.fluid)}
      <Img fluid={posts[0].node.frontmatter.cover_image.childImageSharp.fluid} />
    </div>)
}

export default HomeSection
