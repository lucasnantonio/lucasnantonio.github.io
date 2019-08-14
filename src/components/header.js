import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Header = ({ siteTitle, currentSection }) => (
  <div className="bg-red mb5">
    <header
      style={{
        left: '0',
        right: '0',
        top: '0',
        zIndex: '1'
      }}
      className={'fixed mh4 bg-white'}
    >
      <div>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <div className='flex justify-between bb bw1 pb3 b--black '>
            <div className="w-third-l w-50">
              <h1 className={'f5 fw6 black link pt2 h1'}>Lucas Neumann</h1>
            </div>
            <div className="w-two-thirds-l">
              <ul className="list flex pl0 justify-between black-50 f5 mv0 pt3">
                <li>
                  Petal
                </li>
                <li>
                  Nubank
                </li>
                <li>
                  Kano
                </li>
                <li>
                  Writing
                </li>
                <li>
                  Other
                </li>
                <li>
                  Contact
                </li>
              </ul>
            </div>

            {/* <ReactCSSTransitionGroup
              component="div"
              className="relative h2 w-two-thirds-l w-50"
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={200}
              transitionEnterTimeout={200}
              transitionLeaveTimeout={200}>
              <h1 key={currentSection} className='absolute f3 fw6 link black tl-l tr w-100'>{currentSection}</h1>
            </ReactCSSTransitionGroup> */}

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
