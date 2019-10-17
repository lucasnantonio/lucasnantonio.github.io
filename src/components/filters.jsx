import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Filter from './filter'
const topics = [
  'User understanding',
  'Product design',
  'Team management'
]
function Filters ({ isShowing }) {
  return (
    <div>
      {/* <CSSTransition in={isShowing} timeout={200} classNames="filter-animation"> */}
      {isShowing && (
        <div className="fixed pl5" style={{ top: '6rem', left: '0px' }}>
          <p className="neue-regular f7 ttu tracked black-20">work by topic</p>
          <ul className="list pl0 mt4 f6" style={{ marginLeft: '-1rem' }}>
            {topics.map((item) => <Filter key={item} title={item}/>)}
          </ul>
        </div>
      )}
      {/* </ CSSTransition> */}
    </div>
  )
}

export default Filters
