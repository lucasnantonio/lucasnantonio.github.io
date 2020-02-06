import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import Filter from "./filter"
import AllFilter from "./allFilter"
import SurpriseButton from "./SurpriseButton"
import { minWidth, topics, sizes } from "./utils"

// const { minWidth, topics, sizes } = Utils

function Filters({ selectedTopics, setSelectedTopics, isAll, setAll, posts }) {
  return (
    <div
      className="w-100 bg-white z-max flex justify-end mb6"
      style={{
        maxWidth: minWidth,
        top: "0px",
        right: "0px",
        left: "0px",
        marginLeft: "auto",
        marginRight: "0px",
      }}
    >
      <div className="w-100 flex b relative bg-red">
        <div
          // see css for custom styles
          id="filters"
          className="w-100-l 100vw list pl0 f5 flex items-center-l justify-between-l overflow-x-scroll"
        >
          <AllFilter
            selectedTopics={selectedTopics}
            setSelectedTopics={setSelectedTopics}
            isAll={isAll}
            setAll={setAll}
          />
          {topics.map(item => (
            <Filter
              selectedTopics={selectedTopics}
              setSelectedTopics={setSelectedTopics}
              key={item}
              isAll={isAll}
              setAll={setAll}
              title={item}
            />
          ))}
          <SurpriseButton posts={posts} />
          {/* <div>Bio</div> */}
        </div>
      </div>
    </div>
  )
}

export default Filters
