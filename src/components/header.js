import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const navItems = [
  { title: 'Lucas Neumann', link: '#' },
  { title: 'Petal', link: '#' },
  { title: 'Nubank', link: '#' },
  { title: 'Kano', link: '#' },
  { title: 'Personal', link: '#' },
  { title: 'Contact', link: '#' }]

const Header = ({ siteTitle, currentSection }) => {
  const [hoveredSection, setHoveredSection] = useState(navItems[0])
  const [leftPosition, setLeftPosition] = useState(0)
  const [underlineWidth, setUnderlineWidth] = useState(0)

  const getXPosition = (item) => {
    return document.getElementById(item.title).getBoundingClientRect().left
  }
  const getWidth = (item) => {
    return document.getElementById(item.title).getBoundingClientRect().width
  }

  // let underlineStyle

  const underlineStyle =
    {
      position: 'absolute',
      height: '2px',
      width: underlineWidth,
      background: 'black',
      bottom: '0px',
      left: leftPosition - 35
    }

  return (

    <div className="mb5 list ml0 pl0 flex relative">
      <div style={underlineStyle}></div>
      <h1 id={navItems[0].title} className="w-third f4" onMouseEnter={() => { setHoveredSection(0); setLeftPosition(getXPosition(navItems[0])); setUnderlineWidth(getWidth(navItems[0])) }}>
        {navItems[0].title}
      </h1>
      <ul className="f4 list pl0 flex w-two-thirds justify-between">
        {navItems.map((item, index) => {
          return (
            index > 0 &&
             <Link id={item.title} to={item.link} key={item.title} onMouseEnter={() => { setHoveredSection(0); setLeftPosition(getXPosition(item)); setUnderlineWidth(getWidth(item)) }}>
               <li>
                 {item.title}
               </li>
             </Link>
          )
        })}
      </ul>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
