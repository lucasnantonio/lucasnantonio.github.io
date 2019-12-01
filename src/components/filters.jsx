import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import Filter from "./filter"
import AllFilter from "./allFilter"
import { minWidth, topics, sizes } from "./utils"

// const { minWidth, topics, sizes } = Utils

function Filters({
  setSelectedSizes,
  selectedTopics,
  setSelectedTopics,
  isAll,
  setAll,
}) {
  return (
    <div
      className="bg-white z-max flex justify-end"
      style={{
        maxWidth: minWidth,
        top: "0px",
        right: "0px",
        left: "0px",
        marginLeft: "auto",
        marginRight: "0px",
      }}
    >
      <div className="flex nowrap">
        <div className="list pl0 f5 flex items-center b--near-white">
          {topics.map(item => (
            <Filter
              selectedTopics={selectedTopics}
              setSelectedTopics={setSelectedTopics}
              selectedSizes={setSelectedSizes}
              setSelectedSizes={setSelectedSizes}
              key={item}
              isAll={isAll}
              setAll={setAll}
              title={item}
            />
          ))}
        </div>
        <div className="flex items-center">
          <AllFilter
            selectedTopics={selectedTopics}
            setSelectedTopics={setSelectedTopics}
            isAll={isAll}
            setAll={setAll}
          />
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
