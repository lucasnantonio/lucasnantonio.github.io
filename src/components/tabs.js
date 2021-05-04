import { AnimateSharedLayout, motion } from "framer-motion"
import React from "react"
import {
  fadeInAnimation,
  initialFadeAnimation,
  minWidth,
} from "../components/utils"

const Tab = ({ title, active, setTabList, tabList }) => {
  return (
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
      className={`pointer mr4 ${active && "black"}`}
    >
      {title}
      {/* {active && (
        <motion.div
          layoutId="outline"
          style={{
            marginTop: "-.2rem",
            height: "2px",
            background: "black",
          }}
          initial={{ x: 0 }}
        ></motion.div>
      )} */}
    </div>
  )
}

const Tabs = ({ setTabList, tabList }) => {
  return (
    <motion.div
      initial={initialFadeAnimation}
      animate={fadeInAnimation}
      transition={{ duration: 0.5 }}
    >
      <AnimateSharedLayout>
        <div style={{ maxWidth: minWidth }} className="mr4 center">
          <div className="flex f3 fw5 black-40 tracked-tight">
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
      </AnimateSharedLayout>
    </motion.div>
  )
}

export default Tabs
