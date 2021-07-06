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
    { title: "Notes", active: false },
  ])

  return (
    <header
      style={{ maxWidth: minWidth }}
      layoutId="site-header"
      className={`mh4 pt4 center`}
    >
      <div className="layout-grid items-end z-max relative f4 bb pb2">
        <h1
          style={{ gridColumn: "sidebar-start main-start" }}
          className=" f4 black tl fw4"
        >
          <Link to="/" className={"link w-auto-l w-100 black"}>
            Lucas Neumann
          </Link>
        </h1>
        <div
          className="flex justify-between fw5 w-auto-l w-100 pl4"
          style={{ gridColumn: "main-start / main-end" }}
        >
          <Tabs
            location={location}
            tabList={tabList}
            setTabList={setTabList}
          ></Tabs>
          <TwitterLogo></TwitterLogo>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
