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
    <motion.div className="w-100-l w-50 flex flex-row-l flex-column items-start mb5 lh-copy f3-l f2">
          <div className="mr3">
            <AllFilter
              selectedTopics={selectedTopics}
              setSelectedTopics={setSelectedTopics}
              isAll={isAll}
              setAll={setAll}
            />
          </div>
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
          {/* <div>Bio</div> */}
    </motion.div>
  )
}

export default Filters
