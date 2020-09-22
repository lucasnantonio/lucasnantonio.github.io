import React, {useState} from 'react'
import { ic_twitter_logo, ic_twitter_logo_white } from "../components/icons.js"
import { motion } from 'framer-motion';

export default function TwitterLogo() {
  const [isHovered, setHovered] = useState(false)
  const twitterColor = "rgb(29, 161, 242)"
  return (
    <a style={{marginTop: "-1.25rem"}} target="_blank" href="http://twitter.com/lucasnantonio">
    <motion.div layout whileTap={{scale: 0.9}} >
    <motion.svg  layout onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.circle  style={{transform: "scale(0)"}} initial={{scale: 0}} animate={{scale: isHovered ? .85 : 0}} cx="41" cy="41" r="39" fill={!isHovered ? "white" : twitterColor}/>
<motion.path  initial={{scale: 0.2, opacity: 0}} animate={{opacity: 1, scale: !isHovered ? 0.5 : 0.6 }} d="M33.8371 60C50.4411 60 59.5227 46.1485 59.5227 34.1366C59.5227 33.7432 59.5227 33.3515 59.4963 32.9616C61.263 31.6748 62.7879 30.0816 64 28.2564C62.3523 28.9916 60.6046 29.4736 58.8149 29.6866C60.6995 28.5506 62.1101 26.7639 62.7837 24.6589C61.0117 25.7177 59.0732 26.4639 57.0515 26.8653C55.6905 25.408 53.8904 24.443 51.9296 24.1196C49.9691 23.7963 47.9574 24.1326 46.2057 25.0766C44.454 26.0205 43.0602 27.5195 42.2397 29.3414C41.4192 31.1634 41.2182 33.2069 41.6675 35.1556C38.0782 34.9744 34.5671 34.0353 31.3619 32.3991C28.1567 30.763 25.329 28.4664 23.0624 25.6584C21.908 27.6595 21.5544 30.0284 22.0737 32.2828C22.5929 34.5371 23.946 36.5075 25.8573 37.7926C24.4207 37.7497 23.0154 37.3595 21.76 36.6549C21.76 36.6921 21.76 36.7311 21.76 36.7701C21.7606 38.8687 22.4821 40.9025 23.8021 42.5267C25.1221 44.1508 26.9594 45.2652 29.0024 45.6807C27.6734 46.0456 26.2789 46.099 24.9262 45.8367C25.5031 47.6427 26.6262 49.2223 28.1384 50.3541C29.6506 51.4858 31.4763 52.1135 33.3602 52.1492C30.1635 54.6788 26.2147 56.0522 22.149 56.048C21.4307 56.0466 20.7132 56.0028 20 55.9167C24.1283 58.5846 28.9318 59.9995 33.8371 59.9928" fill={isHovered ? "white" : "#111111"}/>
</motion.svg>
    </motion.div>
    </a>
  )
}
