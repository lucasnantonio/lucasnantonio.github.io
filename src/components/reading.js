import React, { useState } from "react"
import { motion } from "framer-motion"
import books, { tags } from "./books"

const Tag = ({ title, activeTag, setActiveTag }) => {
  let [isHovered, setHover] = useState(false)
  let isActive = title === activeTag
  return (
    <div
      onClick={() => {
        setActiveTag(title)
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`nowrap pointer f4 ph3 pv2 br-pill mr2 mb4 bw1 fw5 
      ${isActive ? "white bg-black" : "bg-transparent"}
      ${isHovered ? "black-50" : "black-40"} `}
    >
      {title}
    </div>
  )
}

const TagRow = ({ activeTag, setActiveTag }) => {
  return (
    <div className="flex pv2 b--near-white bb bw2 overflow-scroll">
      {tags.map(item => (
        <Tag
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          title={item}
        ></Tag>
      ))}
    </div>
  )
}

const Item = ({ item }) => {
  let [hover, setHover] = useState(false)
  return (
    <div
      className="w-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        className="underline-none link black pv5 f3 bw2 bb b--near-white flex justify-between"
        href={item.amazon_url}
        target="_blank"
      >
        <div className="mr4">
          <h2 className="mt0 flex">
            <span className={`f3 fw5 ${hover && "underline"}`}>
              {item.title}{" "}
            </span>
            {item.best && (
              <div className="f6 fw7 light-blue 1 flex items-center ml2 ttu pt1">
                ★ Best
              </div>
            )}
          </h2>
          <div className="f4 pt2 measure black-50">{item.text}</div>
        </div>
        {item.img && (
          <img className="w4 h-100 br2 ba b--black-10" src={item.img}></img>
        )}
      </a>
    </div>
  )
}

function Reading() {
  const [activeTag, setActiveTag] = useState("All")
  const rows = books
    .filter(item => {
      if (activeTag === "All") {
        return true
      } else {
        return item.tag === activeTag
      }
    })
    .map(item => <Item key={item.title} item={item}></Item>)
  return (
    <motion.div
      key="reading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <TagRow activeTag={activeTag} setActiveTag={setActiveTag}></TagRow>
        {rows}
        <div className="mt3 pt4">
          <p className="measure lh-copy">
            This page contains affiliate links from Amazon.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Reading
