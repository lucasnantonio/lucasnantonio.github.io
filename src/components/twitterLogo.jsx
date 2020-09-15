import React, {useState} from 'react'
import { ic_twitter_logo, ic_twitter_logo_white } from "../components/icons.js"
import { motion } from 'framer-motion';

export default function TwitterLogo() {
  const [isHovered, setHovered] = useState(false)
  return (
    <a target="_blank" href="http://twitter.com/lucasnantonio">
    <div>
      <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}  style={{background: isHovered ? "aliceBlue" : "transparent"}} className={`overflow-hidden pointer br-pill pa3 flex bw1 br-pill h3 w3 mb0-l mb4 relative`}>
        
      <motion.div className="absolute br-pill border-box"
      style={{background:"rgb(29, 161, 242)", bottom: "0", left: "0", width: "10rem", height: "10rem"}}
      initial={{scale: 0}}
      animate={{scale: isHovered ? 1 : 0, bottom: "-5rem", left: "-5rem"}}
      >
      </motion.div>
      <motion.div animate={{scale:isHovered ? 1.2 : 1}} whileTap={{scale: 0.9}} className="absolute" style={{top: "1.1rem", left: "1.1rem"}}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <motion.path d="M8.97512 19.8134C16.145 19.8134 20.0666 13.8732 20.0666 8.72194C20.0666 8.55322 20.0666 8.38526 20.0552 8.21806C20.8181 7.66623 21.4766 6.98297 22 6.20026C21.2885 6.51551 20.5338 6.72225 19.761 6.81358C20.5748 6.32641 21.1839 5.56017 21.4748 4.65746C20.7096 5.11153 19.8725 5.43153 18.9995 5.60366C18.4118 4.9787 17.6345 4.56487 16.7878 4.4262C15.9412 4.28754 15.0725 4.43177 14.3161 4.83658C13.5597 5.24139 12.9578 5.88421 12.6035 6.66556C12.2492 7.44692 12.1624 8.32325 12.3564 9.15894C10.8065 9.08124 9.29036 8.67849 7.90629 7.97683C6.52221 7.27517 5.30116 6.29028 4.3224 5.0861C3.82391 5.94426 3.67123 6.96016 3.89545 7.92694C4.11968 8.89371 4.70394 9.73869 5.52928 10.2898C4.90892 10.2714 4.30209 10.1041 3.76 9.8019C3.76 9.81786 3.76 9.83458 3.76 9.8513C3.76025 10.7513 4.0718 11.6235 4.64181 12.32C5.21183 13.0165 6.00521 13.4944 6.8874 13.6726C6.3135 13.8291 5.71136 13.852 5.12724 13.7395C5.37634 14.514 5.8613 15.1914 6.51429 15.6768C7.16729 16.1621 7.95567 16.4313 8.76916 16.4466C7.3888 17.5314 5.68361 18.1204 3.92796 18.1186C3.61781 18.118 3.30796 18.0992 3 18.0623C4.78268 19.2064 6.85693 19.8132 8.97512 19.8103" fill={!isHovered ? "black" : "white"}/>
  </svg>
      </motion.div>
      
        </div>
    </div>
    </a>
  )
}
