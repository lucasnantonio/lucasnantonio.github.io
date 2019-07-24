import React, { Component, useState } from 'react'
import PostList from './postList'

const HomeSection = ({ title, place, date, description, posts }) => {
  const sectionPosts = posts.filter((item) => item.node.frontmatter.category === title)
  const [color, setColor] = useState('green')
  return (
    <div className={'bt pt3 mt5 flex flex-row-l flex-column'}>
      <div className={'w-50-l mr4'}>
        <div className="flex justify-between">
          <h2 className={'f3 mt0 pt0 sans b'}>{title}</h2>
          <p className={'f5 mt0 pt0 black-40'}>{date}</p>
        </div>
        <p className={'f6 pt0 lh-copy measure mt4' }
          // style={{ fontFamily: 'New York Medium',
          //   fontWeight: 100 }}
        >{description}</p>
        <PostList posts={sectionPosts} setColor={setColor}/>
      </div>
      <div className="h6 w-50 pa5" style={{ backgroundColor: color }}>haha</div>
    </div>)
}

export default HomeSection
