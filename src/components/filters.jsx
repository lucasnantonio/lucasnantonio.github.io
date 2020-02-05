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
      <div className="w-100 flex flex-wrap b">
        <div className="list pl0 f5 flex flex-wrap items-center-l w-100 justify-between-l">
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
        </div>

        {/* <div className="list pl0 f5 flex items-center">
          {sizes.map(item => (
            <Filter
              isAll={isAll}
              setAll={setAll}
              selectedTopics={selectedTopics}
              selectedSizes={selectedSizes}
              setSelectedTopics={setSelectedTopics}
              setSelectedSizes={setSelectedSizes}
              key={item}
              title={item}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Filters
