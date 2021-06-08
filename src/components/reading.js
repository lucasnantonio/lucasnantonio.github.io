import React, { useState } from "react"
import { motion } from "framer-motion"
import books, { tags } from "./books"
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const book = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}
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
    <div
      style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
      className="ph4 flex pv5 b--near-white overflow-scroll"
    >
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
    <motion.div
      variants={book}
      key={item.title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={item.url}
      target={"_blank"}
      className="w-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        className="underline-none link black pv5 f3 bw2 bb b--near-white flex justify-between"
        href={item.amazon_url}
        target="_blank"
      >
        <div className="mr5">
          <h2 className="mt0 lh-title flex flex-row-l flex-column-reverse items-center-l mb3">
            <span className={`f3 tracked-tight ${hover && "underline"}`}>
              {item.title}{" "}
            </span>
            {item.best && (
              <span className="dib f6 fw8 light-blue flex items-center ml2-l pb0-l pb2 ttu nowrap pt1">
                <span
                  style={{
                    marginTop: "-.022rem",
                    marginRight: "0.1rem",
                    fontSize: "1rem",
                  }}
                >
                  ★
                </span>
                Best
              </span>
            )}
          </h2>
          <div className="f4 measure black-50">{item.text}</div>
        </div>
        {item.img && (
          <img
            className={`w4 h-100 br2 ba b--black-10 ${item.best &&
              "mt0-l mt4"}`}
            src={item.img}
          ></img>
        )}
      </a>
    </motion.div>
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
      <motion.div
        key="writing"
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0 }}
      >
        <TagRow activeTag={activeTag} setActiveTag={setActiveTag}></TagRow>
        {rows}
        <div className="mt3 pt4">
          <p className="measure lh-copy">
            This page contains affiliate links from Amazon.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Reading
