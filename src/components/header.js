import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Utils from "./utils"
import Filters from "./filters"
import { minWidth } from "./utils"

const Header = ({
  siteTitle,
  selectedTopics,
  setSelectedTopics,
  isAll,
  setAll,
  isIndex,
}) => (
  <div>
    <header
      style={{
        maxWidth: minWidth,
        width: "100%",
        left: 0,
        right: 0,
        marginRight: "auto",
        marginLeft: "auto",
      }}
      className={
        "flex fixed bg-white z-max space-between bb b--near-white bw1 ph0-l ph4"
      }
    >
      <div className="w-100">
        <Link to="/" className={"link"}>
          <p className="f5 black neue-regular b">Lucas Neumann</p>
        </Link>
      </div>
      {isIndex && (
        <Filters
          selectedTopics={selectedTopics}
          setSelectedTopics={setSelectedTopics}
          isAll={isAll}
          setAll={setAll}
        />
      )}
    </header>
    <div className="pv2">
      <p className="f3 white"> _</p>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
