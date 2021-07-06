import { motion } from "framer-motion"
import React, { useState } from "react"
import articles, { tags } from "./articles"
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const article = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

function Writing() {
  const [activeTag, setActiveTag] = useState("All")

  const Tab = ({ title, activeTag, setActiveTag }) => {
    let [isHovered, setHover] = useState(false)
    let isActive = title === activeTag
    return (
      <div
        onClick={() => {
          setActiveTag(title)
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`nowrap pointer f4 ph3 pv2 mr2 fw5 b--black 
        ${isActive ? "black" : "bg-transparent"}
        ${isHovered ? "black-50" : "black-40"} `}
      >
        {title}
      </div>
    )
  }

  const TagRow = ({ activeTag, setActiveTag }) => {
    return (
      <div
        // style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
        className="flex pt5 overflow-scroll bb bw1 pb3"
      >
        {tags.map(item => (
          <Tab
            activeTag={activeTag}
            setActiveTag={setActiveTag}
            title={item}
          ></Tab>
        ))}
      </div>
    )
  }

  const Item = ({ item }) => {
    let [isHovered, setHover] = useState(false)
    return (
      <div className="layout-grid">
        <a
          key={item.title}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          href={item.url}
          target={"_blank"}
          style={{ gridColumn: "4/15" }}
          className={`pa4 f3 b--near-white link black ${isHovered &&
            "bg-near-white ease bg-animate"}`}
        >
          <h2
            style={{ gridColumn: "4/8" }}
            className={`f4 mb2 tracked-tight fw4 mt0`}
          >
            {item.title}
          </h2>
          <div
            style={{ gridColumn: "8/15" }}
            className="f4 pt0 black-50 pb3 measure"
          >
            {item.subtitle}
          </div>
        </a>
      </div>
    )
  }

  const rows = articles
    .filter(item => {
      if (activeTag === "All") {
        return true
      } else {
        return item.tags === activeTag
      }
    })
    .map(item => <Item key={item.title} item={item} />)
  return (
    <motion.div
      key="writing"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
    >
      {rows}
    </motion.div>
  )
}

export default Writing
