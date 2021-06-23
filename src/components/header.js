import { motion, useViewportScroll } from "framer-motion"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Tabs from "../components/tabs"
import TwitterLogo from "../components/twitterLogo"
import { minWidth } from "./utils"

function Header({ location }) {
  const { scrollY } = useViewportScroll()
  const [tabList, setTabList] = useState([
    { title: "Work", active: true },
    { title: "About", active: false },
    { title: "Writing", active: false },
    { title: "Reading", active: false },
  ])

  return (
    <motion.header
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      layoutId="site-header"
      className={`z-max space-between mh4 center-l pt4 relative`}
    >
      <div
        style={{ maxWidth: minWidth }}
        className="flex justify-between items-center-l items-start center fw4"
      >
        <div className="flex flex-row-l flex-column w-100 items-center-l">
          <h1 className="f3 tracked-tight tl fw4">
            <Link to="/" className={"link w-auto-l w-100 black"}>
              Lucas Neumann
            </Link>
          </h1>

          <div className="ph3 flex-l dn fw4">・</div>
          <Tabs
            location={location}
            tabList={tabList}
            setTabList={setTabList}
          ></Tabs>
        </div>
        <TwitterLogo></TwitterLogo>
      </div>
    </motion.header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
