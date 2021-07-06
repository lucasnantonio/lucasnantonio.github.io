import { motion } from "framer-motion"
import React, { useState } from "react"
import sparkles from "../images/icons/best.svg"
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
      {title === "Best" ? (
        <span>
          <img
            style={{
              width: "16px",
              marginBottom: "-1.5px",
              marginRight: "4px",
              // opacity: activeTag === "Best" ? 1 : 0.5,
            }}
            src={sparkles}
          ></img>
          {title}
        </span>
      ) : (
        title
      )}
    </div>
  )
}

const TagRow = ({ activeTag, setActiveTag }) => {
  return (
    <div
      // style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
      className="flex overflow-scroll bw1 mb4"
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
        className={`flex justify-between link ba b--near-white ph4 pt3 pb4 note ${hover &&
          "bg-near-white ease bg-animate"}`}
        href={item.amazon_url}
        target="_blank"
      >
        <div className="mr5">
          <h2 className="lh-title flex flex-row-l flex-column-reverse items-center-l mb3">
            <span className={`f4`}>{item.title} </span>
            {item.best && (
              <span
                // style={{ color: "" }}
                className="dib f4 fw5 flex black-50 items-center ml2-l pb0-l pb2 nowrap pt1"
              >
                <span
                  style={{
                    marginTop: "-.022rem",
                    marginRight: "0.1rem",
                  }}
                >
                  <img
                    style={{
                      width: "16px",
                      marginBottom: "-1.5px",
                      opacity: 1,
                      marginRight: "4px",
                    }}
                    src={sparkles}
                  ></img>
                </span>
                Best
              </span>
            )}
          </h2>
          <div className="f4 measure black">{item.text}</div>
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
      } else if (activeTag === "Best") {
        return item.best
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
