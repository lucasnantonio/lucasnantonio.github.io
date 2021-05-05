import { AnimateSharedLayout, motion } from "framer-motion"
import React from "react"
import { Link } from "gatsby"
import { minWidth } from "../components/utils"

const Tab = ({ title, active, setTabList, tabList }) => {
  const lowerCaseTitle = title.toLowerCase()
  return (
    <Link
      className="link"
      to={lowerCaseTitle != "work" ? `/${lowerCaseTitle}` : `/`}
    >
      <div
        key={title}
        className={`pointer mr4 ${active ? "black" : "black-40"}`}
      >
        {title}
      </div>
    </Link>
  )
}

const Tabs = ({ setTabList, tabList, location }) => {
  return (
    <div style={{ maxWidth: minWidth }}>
      <div className="flex f3 fw5 tracked-tight">
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
    </div>
  )
}

export default Tabs
