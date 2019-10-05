import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    className={'pv2 flex fixed bg-white w-100 z-max'}
  >
    <div className="w-third">
      <Link
        to="/"
        className={'link'}
      >
        <p className="f5 black pl5 neue-regular">
          Lucas Neumann
        </p>
      </Link>
    </div>
    <div className="flex w-two-thirds">
      <p className="ml3">Intro</p>
      <p className="ml3">Work</p>
      <p className="ml3">Contact</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
