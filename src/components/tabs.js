import { AnimateSharedLayout, motion } from "framer-motion"
import React, { useState } from "react"
import { Link } from "gatsby"
import { minWidth } from "../components/utils"

const Tab = ({ title, active, setTabList, tabList }) => {
  let [isHovered, setHovered] = useState(false)
  const lowerCaseTitle = title.toLowerCase()
  return (
    <Link
      className="link"
      to={lowerCaseTitle != "work" ? `/${lowerCaseTitle}` : `/`}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        key={title}
        className={`pointer mr4 ${active ? "black" : ""} ${
          isHovered ? "black-50" : "black-40"
        }`}
      >
        {title}
      </div>
    </Link>
  )
}

const Tabs = ({ setTabList, tabList, location }) => {
  return (
    <div className="flex f3 fw5 tracked-tight w-auto-l w-100">
      {tabList.map(item => {
        let isActive
        if (location === "/" && item.title.toLowerCase() === "work") {
          isActive = true
        } else if (location.indexOf(item.title.toLowerCase()) === 1) {
          isActive = true
        }
        return (
          <Tab
            key={item.title}
            setTabList={setTabList}
            tabList={tabList}
            title={item.title}
            active={isActive}
          ></Tab>
        )
      })}
    </div>
  )
}

export default Tabs
