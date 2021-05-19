import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { minWidth } from "./utils"
import Tabs from "../components/tabs"
import TwitterLogo, { twitterLogo } from "../components/twitterLogo"
import { AnimatePresence, motion } from "framer-motion"

function Header({ location }) {
  const [tabList, setTabList] = useState([
    { title: "Work", active: true },
    { title: "About", active: false },
    { title: "Writing", active: false },
    { title: "Reading", active: false },
  ])
  return (
    <motion.header
      layoutId="site-header"
      className={"z-max space-between mh4 center-l pb5 pt5 fixed w-100"}
    >
      <div
        style={{ maxWidth: minWidth }}
        className="w-100 flex justify-between items-center-l items-start center"
      >
        <div className="flex flex-row-l flex-column w-100 items-center">
          <h1 className="f3 fw5 tracked-tight black-80 tl">
            <Link to="/" className={"link w-auto-l w-100 black"}>
              Lucas Neumann
            </Link>
          </h1>

          <div className="ph3 flex-l dn">・</div>
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
