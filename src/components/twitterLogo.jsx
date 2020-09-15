import React, {useState} from 'react'
import { ic_twitter_logo } from "../components/icons.js"

export default function TwitterLogo() {
  const [isHovered, setHovered] = useState(false)
  return (
    <a target="_blank" href="http://twitter.com/lucasnantonio">
    <div>
      <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}  className="pointer br-pill b--near-white ba pa3 flex bw1 br-pill h3 w3 mb0-l mb4">{ic_twitter_logo}</div>
    </div>
    </a>
  )
}
