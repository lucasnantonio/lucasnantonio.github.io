import React, { useState } from "react"
import { motion } from "framer-motion"
import books from "./books"

const Tag = ({ title }) => {
  return <div>{title}</div>
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
        className="underline-none link black pv4 f3 bw2 bt b--near-white flex justify-between"
        href={item.amazon_url}
        target="_blank"
      >
        <div className="mr4">
          {item.best && <div className="f6 fw7 pink">★ Life-changing</div>}
          <h2 className={`f3 fw5 mt2 ${hover && "underline"}`}>{item.title}</h2>
          <div className="f4 pt2 measure black-50">{item.text}</div>
          <div className="f5 pt4 fw5 flex flex-row-ns flex-column items-center-l items-start">
            {" "}
          </div>
        </div>
        {item.img && (
          <img className="w4 h-100 br2 ba b--black-10" src={item.img}></img>
        )}
      </a>
    </div>
  )
}

function Reading() {
  const rows = books.map(item => <Item key={item.title} item={item}></Item>)
  return (
    <motion.div
      key="reading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        {rows}
        <div className="mt3 bt bw2 b--near-white pt4">
          <p className="measure lh-copy">
            This page contains affiliate links from Amazon and Bookshop.org. If
            you buy a book using these links, I may earn a comission.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Reading
