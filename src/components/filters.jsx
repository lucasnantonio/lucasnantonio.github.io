import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import Filter from "./filter"
import AllFilter from "./allFilter"
import SurpriseButton from "./SurpriseButton"
import { minWidth, topics, sizes, backgroundGray } from "./utils"
import { motion } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "../components/utils"

// const { minWidth, topics, sizes } = Utils

function Filters({ selectedTopics, setSelectedTopics, isAll, setAll, posts }) {
  return (
    <motion.div
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
      <div className="w-100 flex b relative">
        <div
          style={{ backgroundColor: "#f7f7f7" }}
          id="filters"
          className="
         pa2 br-pill w-100-l list f5 flex items-center-l justify-between-l overflow-x-scroll"
        >
          <div className="w-10 mr3">
            <AllFilter
              selectedTopics={selectedTopics}
              setSelectedTopics={setSelectedTopics}
              isAll={isAll}
              setAll={setAll}
            />
          </div>
          <div className="w-90 justify-between flex">
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
            <div>
              <SurpriseButton posts={posts} />
            </div>
          </div>
          {/* <div>Bio</div> */}
        </div>
      </div>
    </motion.div>
  )
}

export default Filters
