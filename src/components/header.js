import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Utils from "./utils"
const { minWidth } = Utils

const Header = ({ siteTitle, isWorkInView }) => (
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
      className={"pv1 flex fixed bg-white z-max space-between bb"}
    >
      <div className="w-100">
        <Link to="/" className={"link"}>
          <p className="f3 black neue-regular">Lucas Neumann</p>
        </Link>
      </div>
      {!isWorkInView === true && (
        <div className="flex neue-regular f3">
          <a className="link black" href="#">
            <p>Intro</p>
          </a>
          <a className="ml4 link black" href="#work">
            <p>Work</p>
          </a>
          <a className="ml4 link black" href="#contact">
            <p>Contact</p>
          </a>
        </div>
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
