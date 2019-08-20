import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const navItems = [
  { title: 'Lucas Neumann', link: '#' },
  { title: 'Work', link: '#Petal' },
  // { title: 'Nubank', link: '#Nubank' },
  // { title: 'Kano', link: '#Kano' },
  // { title: 'Personal', link: '#Personal' },
  { title: 'Writing', link: '#Writing' },
  { title: 'Contact', link: '#' }]

const Header = ({ siteTitle, currentSection, setCurrentSection }) => {
  const [hoveredSection, setHoveredSection] = useState(navItems[0].title)
  const [leftPosition, setLeftPosition] = useState(0)
  const [underlineWidth, setUnderlineWidth] = useState(0)

  const getXPosition = (currentSection) => {
    return document.getElementById(currentSection).getBoundingClientRect().left
  }
  const getWidth = (currentSection) => {
    return document.getElementById(currentSection).getBoundingClientRect().width
  }

  useEffect(() => {
    setUnderlineWidth(getWidth(currentSection))
    setLeftPosition(getXPosition(currentSection))
  })

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
    <div style={{ left: 0, right: 0 }} className="mb5 list ml0 mh4 flex fixed z-1 bg-white">
      <div></div>
      <div style={underlineStyle}></div>
      <div className="w-third">
        <h1 className="fw4 dib pointer f5 pv4 mv0" id={navItems[0].title} onMouseEnter={() => { setCurrentSection(navItems[0].title) }}>{navItems[0].title}</h1>
      </div>
      <ul className="pv4 mv0 f5 list pl0 flex w-two-thirds justify-start">
        {navItems.map((item, index) => {
          return (
            index > 0 &&
             <Link className="link black mr5" id={item.title} to={item.link} key={item.title} onMouseEnter={() => { setCurrentSection(item.title) }}>
               <li className={`link ${item.title === currentSection && 'black'}`}>
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
