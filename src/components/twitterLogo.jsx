import React, {useState} from 'react'
import { ic_twitter_logo } from "../components/icons.js"
import { motion } from 'framer-motion';

export default function TwitterLogo() {
  const [isHovered, setHovered] = useState(false)
  return (
    <a target="_blank" href="http://twitter.com/lucasnantonio">
    <div>
      <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}  className="overflow-hidden pointer br-pill b--near-white ba pa3 flex bw1 br-pill h3 w3 mb0-l mb4 relative hover-b--blue">
        
      <motion.div className="absolute bg-blue br-pill border-box"
      style={{bottom: "0", left: "0", width: "10rem", height: "10rem"}}
      animate={{scale: isHovered ? 1 : 0, bottom: "-5rem", left: "-5rem"}}
      >
      </motion.div>
      <div className="absolute">
      {ic_twitter_logo} 
      </div>
      
        </div>
    </div>
    </a>
  )
}
