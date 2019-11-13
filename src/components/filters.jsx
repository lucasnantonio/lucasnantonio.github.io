import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import Filter from "./filter"
import Utils from "./utils"

const topics = ["Research", "Design", "Team management", "Code", "Writing"]
const sizes = ["P", "M", "G"]

const { minWidth } = Utils

function Filters() {
  return (
    <div>
      {/* <CSSTransition in={isShowing} timeout={200} classNames="filter-animation"> */}
      <div
        className="bg-white z-max flex items-center justify-between"
        style={{
          maxWidth: minWidth,
          top: "0px",
          right: "0px",
          left: "0px",
          marginLeft: "auto",
          marginRight: "0px",
        }}
      >
        <div className="flex w-100">
          <span className=" flex flex-column justify-center neue-regular f7 ttu tracked black mr4">
            Topic
          </span>
          <ul className="list pl0 f5 flex" style={{ marginLeft: "-1rem" }}>
            {topics.map(item => (
              <Filter key={item} title={item} />
            ))}
          </ul>
        </div>
        <div className="flex">
          <span className=" flex flex-column justify-center neue-regular f7 ttu tracked black mr4">
            Size
          </span>
          <ul className="list pl0 f5 flex" style={{ marginLeft: "-1rem" }}>
            {sizes.map(item => (
              <Filter key={item} title={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Filters
