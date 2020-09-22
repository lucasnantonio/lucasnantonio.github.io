import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19"
      fill="#cccccc"
    />
  </svg>
)
const Header = ({
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
          // width: "100%",
          maxWidth: minWidth,
          // marginRight: "auto",
          // marginLeft: "auto",
          // borderColor: "rgba(150,150,150,.1)",
          // background: "white"
        }}
        className={
          "flex z-max space-between bb bw2 mh4 center-l"
        }
      >
        <div
          style={{ maxWidth: minWidth }}
          className="w-100 flex justify-between center items-center"
        >
          <Link to="/" className={"link"}>
            <h1 style={{ fontSize: '19px' }}
              className="f3 fw5 tracked-tight black-80 neue-regular pv2">Lucas Neumann</h1>
          </Link>
          {!isIndex &&
            <div className="flex">
              {prev ? (
                <Link to={prev.frontmatter.path} className={"link"}>
                  <span
                    style={{ transition: "background-color .2s" }}
                    className="flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black hover-dark-gray f3 "
                  >
                    ←
                  </span>
                </Link>
              ) : (
                  <span
                    style={{ transition: "background-color .2s" }}
                    className="o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black hover-dark-gray f3"
                  >
                    ←
                  </span>
                )}
              {next ? (
                <Link className="link" to={next.frontmatter.path}>
                  <span style={{ transition: "background-color .2s" }} className="flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center black items-center hover-dark-gray f3">
                    →
                  </span>
                </Link>
              ) : (
                  <span style={{ transition: "background-color .2s" }} className="o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 f3">
                    →
                  </span>
                )}
            </div>
          }
        </div>
      </header>
    </div >
  )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
