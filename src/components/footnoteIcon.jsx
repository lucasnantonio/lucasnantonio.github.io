import React from 'react'

const circledNumberStyle = {
  padding: '0em 0.6em .3em',
  borderRadius: '100%',
  fontSize: '.5em',
  border: '1px solid rgba(0,0,0,.1)',
  fontWeight: '400',
  verticalAlign: '.7rem'
}

const FootnoteIcon = ({ number }) => {
  return (<span style={circledNumberStyle}>{number}</span>)
}

export default FootnoteIcon
