import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      left: '0',
      right: '0',
      top: '0',
      zIndex: '1',
      borderBottom: '1px solid black'
    }}
    className={'pv2 fixed mh4 bg-white'}
  >
    <div>
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <h1 className={'f5 fw4 black link'}>
          Lucas Neumann
        </h1>
      </Link>
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
