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
        onClick={() => {
          setTabList(
            tabList.map(item => {
              if (item.title === title) {
                return { ...item, active: true }
              } else {
                return { ...item, active: false }
              }
            })
          )
        }}
        className={`pointer mr4 ${active ? "black" : "black-40"}`}
      >
        {title}
      </div>
    </Link>
  )
}

const Tabs = ({ setTabList, tabList, location }) => {
  console.log(location)
  return (
    <div style={{ maxWidth: minWidth }}>
      <div className="flex f3 fw5 tracked-tight">
        {tabList.map(item => {
          return (
            <Tab
              key={item.title}
              setTabList={setTabList}
              tabList={tabList}
              title={item.title}
              active={item.active}
            ></Tab>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs
