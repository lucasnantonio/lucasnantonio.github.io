import { AnimateSharedLayout, motion } from "framer-motion"
import React from "react"
import {
  fadeInAnimation,
  initialFadeAnimation,
  minWidth,
} from "../components/utils"

const Tabs = ({
  selectedTab,
  setSelectedTab,
  isAboutHovered,
  isWorkHovered,
}) => {
  return (
    <motion.div
      initial={initialFadeAnimation}
      animate={fadeInAnimation}
      transition={{ duration: 0.5 }}
    >
      <AnimateSharedLayout>
        <div style={{ maxWidth: minWidth }} className="mr4 center  ">
          <div className="flex f3 fw5 black-40 tracked-tight mb4">
            <div
              onClick={() => setSelectedTab("Work")}
              className={`pb2 pointer mr4 ${selectedTab === "Work" && "black"}`}
            >
              Work
              {selectedTab === "Work" && (
                <motion.div
                  layoutId="outline"
                  style={{
                    marginTop: ".5rem",
                    height: "3px",
                    background: "black",
                  }}
                  initial={{ x: 0 }}
                  animate={{
                    x: isAboutHovered && selectedTab != "About" ? 10 : 0,
                  }}
                ></motion.div>
              )}
            </div>
            <div
              onClick={() => setSelectedTab("About")}
              className={`pb2 pointer ${selectedTab === "About" && "black"}`}
            >
              About
              {selectedTab === "About" && (
                <motion.div
                  layoutId="outline"
                  style={{
                    marginTop: ".5rem",
                    height: "3px",
                    background: "black",
                  }}
                  initial={{ x: 0 }}
                  animate={{
                    x: isWorkHovered && selectedTab != "Work" ? -10 : 0,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </AnimateSharedLayout>
    </motion.div>
  )
}

export default Tabs
