import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Utils from "./utils"
import Filters from "./filters"
import { minWidth } from "./utils"

const Header = ({
  siteTitle,
  isWorkInView,
  selectedSizes,
  selectedTopics,
  setSelectedTopics,
  setSelectedSizes,
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
        "pv1 flex fixed bg-white z-max space-between bb b--near-white bw1"
      }
    >
      <div className="w-100">
        <Link to="/" className={"link"}>
          <p className="f4 black neue-regular">Lucas Neumann</p>
        </Link>
      </div>
      {!isWorkInView === true && (
        <div className="flex neue-regular f4">
          <a className="ml4 link black" href="#contact">
            <p>Contact</p>
          </a>
        </div>
      )}
      {isWorkInView === true && (
        <Filters
          selectedTopics={selectedTopics}
          selectedSizes={selectedSizes}
          setSelectedTopics={setSelectedTopics}
          setSelectedSizes={setSelectedSizes}
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
