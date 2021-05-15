import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { minWidth } from "./utils"
import Tabs from "../components/tabs"
import TwitterLogo, { twitterLogo } from "../components/twitterLogo"

function Header({ location }) {
  const [tabList, setTabList] = useState([
    { title: "Work", active: true },
    { title: "About", active: false },
    { title: "Writing", active: false },
    { title: "Reading", active: false },
  ])
  return (
    <header
      style={{
        maxWidth: minWidth,
      }}
      className={"flex z-max space-between mh4 center-l pb5 pt5"}
    >
      <div className="w-100 flex justify-between items-center-l items-start">
        <div className="flex flex-row-l flex-column w-100 items-center">
          <Link to="/" className={"link w-auto-l w-100"}>
            <h1 className="f3 fw5 tracked-tight black-80 tl">Lucas Neumann</h1>
          </Link>
          <div className="ph3 flex-l dn">・</div>
          <Tabs
            location={location}
            tabList={tabList}
            setTabList={setTabList}
          ></Tabs>
        </div>
        <TwitterLogo></TwitterLogo>
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
