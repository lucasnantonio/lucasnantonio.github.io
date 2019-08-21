import React from 'react'
import Tag from './tag'
const TagList = () => {
  const tags = [
    'interface',
    'research',
    'management',
    'industrial',
    'awarded',
    'quick fixes'
  ]
  return (
    <div
      style={{
        left: '2rem',
        bottom: '3rem'
      }}
      className='fixed flex flex-column items-start'>
      <div className="mb3 f6">Filter work</div>
      {tags.map((item) => <Tag title={item}></Tag>)}
    </div>
  )
}

export default TagList
