import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import Filter from "./filter"
import AllFilter from "./allFilter"
import SurpriseButton from "./SurpriseButton"
import { minWidth, topics, sizes, backgroundGray } from "./utils"
import { motion } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "../components/utils"

// const { minWidth, topics, sizes } = Utils

function Filters({
  selectedTopics,
  setSelectedTopics,
  isAll,
  setAll,
  posts,
  publishedPosts,
}) {
  return (
    <motion.div className="w-100 bg-white z-max flex justify-end mb5 b--near-white bw1 mr4">
      <div className="w-100 flex b relative">
        <div
          // style={{ backgroundColor: "#f7f7f7" }}
          id="filters"
          className=" w-100-l list f4 flex items-end overflow-x-scroll mr5"
        >
          <div className="mr3">
            <AllFilter
              selectedTopics={selectedTopics}
              setSelectedTopics={setSelectedTopics}
              isAll={isAll}
              setAll={setAll}
            />
          </div>
          <div className="flex items-end">
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
            <div className="flex items-end">
              <SurpriseButton posts={publishedPosts} />
            </div>
          </div>
          {/* <div>Bio</div> */}
        </div>
      </div>
    </motion.div>
  )
}

export default Filters
