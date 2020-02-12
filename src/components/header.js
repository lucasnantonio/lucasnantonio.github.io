import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Utils from "./utils"
import Filters from "./filters"
import { minWidth } from "./utils"
const caret = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19"
      fill="#cccccc"
    />
  </svg>
)
const Header = ({
  siteTitle,
  selectedTopics,
  setSelectedTopics,
  isAll,
  setAll,
  isIndex,
  prev,
  next,
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
      <div className="w-100 flex justify-between items-center">
        <Link to="/" className={"link"}>
          <h1 className="f5 black neue-regular">Lucas Neumann</h1>
        </Link>
        <div className="flex">
          {next && (
            <Link to={next.frontmatter.path}>
              <span
                style={{ transform: "rotateZ(180deg)" }}
                className="flex justify-center center items-center align-center pa3-l pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "
              >
                {caret}
              </span>
            </Link>
          )}
          {prev && (
            <Link to={prev.frontmatter.path}>
              <span className="flex justify-center center items-center align-center pa3-l pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray ">
                {caret}
              </span>
            </Link>
          )}
        </div>
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
    <div className="pb2 pt1">
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
