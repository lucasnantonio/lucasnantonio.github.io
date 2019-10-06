import React, { useState } from 'react'

const Filters = () => {
  return (
    <div className="fixed bt bw1 b--light-gray" style={{ bottom: '3rem ', left: '3rem' }}>
      <p>Filters</p>
      <ul className="list pl0 mt4">
        <li className="pl0 mt3">User understanding</li>
        <li className="pl0 mt3">Product design</li>
        <li className="pl0 mt3">Team management</li>
      </ul>
    </div>
  )
}

export default Filters
