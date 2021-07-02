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
        className={`nowrap pointer f4 ph3 pv2 mr2 bw2 fw5 b--black 
        ${isActive ? "bb black" : "bg-transparent"}
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
        className="flex pt5 b--near-white overflow-scroll bb bw1 mb4"
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
      <motion.a
        variants={article}
        key={item.title}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        href={item.url}
        target={"_blank"}
        className=" pv4 f3 bw2 bb b--near-white flex justify-between relative link black"
      >
        <div>
          <h2 className={`f3 mb3 tracked-tight ${isHovered && "underline"}`}>
            {item.title}
          </h2>
          <div className="f4 pt0 measure black-40 pb3">{item.subtitle}</div>
        </div>
      </motion.a>
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
      <TagRow activeTag={activeTag} setActiveTag={setActiveTag}></TagRow>
      {rows}
    </motion.div>
  )
}

export default Writing
