import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { minWidth } from "./utils"
import Tabs from "../components/tabs"

function Header({ location }) {
  const [tabList, setTabList] = useState([
    { title: "Work", active: true },
    { title: "About", active: false },
    { title: "Writing", active: false },
    { title: "Reading", active: false },
  ])
  return (
    <div>
      <header
        style={{
          maxWidth: minWidth,
        }}
        className={"flex z-max space-between mh4 center-l pb4 pt5"}
      >
        <div
          style={{ maxWidth: minWidth }}
          className="w-100 flex center items-center align-center"
        >
          <Link to="/" className={"link"}>
            <h1 className="f3 fw5 tracked-tight black-80">Lucas Neumann</h1>
          </Link>
          <div className="ph3">・</div>
          <Tabs
            location={location}
            tabList={tabList}
            setTabList={setTabList}
          ></Tabs>
        </div>
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
