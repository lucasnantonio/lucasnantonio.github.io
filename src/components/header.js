import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, currentSection }) => (
  <div className="bg-red mb5">
    haha
    <header
      style={{
        left: '0',
        right: '0',
        top: '0',
        zIndex: '1'
      }}
      className={'fixed mh4 bg-white bb pb2 pt2'}
    >
      <div>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <div className='flex'>
            <h1 className={'f5 fw4 black link w-third'}>
          Lucas Neumann
            </h1>
            <h1 className='f5 fw4 link black'>{currentSection}</h1>
          </div>
        </Link>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
