import React, { useState, useEffect } from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "./layout"
import SEO from "./seo"
import { LifeEvents } from "./lifeEvents"
import { minWidth } from "./utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "./utils"
import { Link } from "gatsby"
const Dot = ({black}) => (              <span style={{position: "absolute", width: "7px", height: "7px", background: black ? "black" : "#eee", borderRadius: "100%", left: "-22px", top: ".45rem", border:"4px solid white"}}></span>)

const About = ({ data }) => {
  const [isScrolled, setScrolled] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.pageYOffset > 500)
    }
  })

  return (
      <motion.div
        initial={initialFadeAnimation}
        animate={fadeInAnimation}
        transition={{ duration: 0.5 }}
      >
        <div className="f4 fw4 lh-copy w-100 mt5 mb3 center relative pb4 b--near-white bw1">
            <div
              className="center flex justify-between flex-column"
              style={{ maxWidth: minWidth }}
            >
              <img src="https://i.postimg.cc/Bv4LjfKD/Bild007-Neg-Nr-8.jpg"></img>
                <div className="flex flex-row-l flex-column mt6 justify-between ">
                <div>
              <div style={{letterSpacing: -0.19, width:"25em"}} className="mr6-l mr0 black-80 fw5 lh-copy">
                <p className="mt0 black-80">I'm now a decade into the journey of learning about people, business, technology, and how design helps them share a common language.</p>
                <p>
                Most notably, I was part of the early design team at Nubank, fighting the complexity of money while growing a vibrant, diverse, international design organization.
                </p>
                <p>
                Design has given me the privilege to follow my curiosities about the human mind, the built environment, society, science, and philosophy. It has taken me around the world to experience different cultures, disciplines and problems. 
                
                <p>Ask me about the time when I interviewed Dan Ariely on a stage, patented an airline recycling bin, made personas for cattle in a farm, co-founded a furniture shop, or when my work was featured in a Dutch sex exhibition.</p>
                </p>
                <p>I currently work as Staff Designer @ Twitter, in New York. <a target="_blank" href="http://twitter.com/lucasnantonio" className="blue u fw6 link">Follow me →</a></p>
              </div>
              </div>
            <div className="mt0-l mt5 w-100 lh-copy">
            <ul style={{paddingLeft: 20}} className="relative mt0">
              <div style={{position: "absolute", top: 12, bottom: 12, left: 4.5, width: 1, border: "1px solid #f3f3f3", zIndex: -3}}></div>
              <li className="mb3 relative flex justify-between mt0 pl2 fw5 black"><Dot black/> Twitter <span className="black-80 ttu f7 tracked blue fw7"><motion.span style={{lineHeight: "2rem"}} initial={{opacity: .5}} animate={{opacity: 1}} transition={{repeat: Infinity, duration: 1.5}}>●</motion.span > NOW</span></li>
              <li className="mb3 relative mt0 pl2 fw5 black-30 flex justify-between">
              <Dot/>
                Petal <span className="f6 fw5">2019</span></li>
              <li className="mb3 relative mt0 pl2 fw5 black-30 flex justify-between">
              <Dot/>
                Nubank <span className="f6 fw5">2016</span></li>
              <li className="mb3 relative mt0 pl2 fw5 black-30 flex justify-between">
              <Dot/>
                Airbus <span className="f6 fw5">2016</span></li>
              <li className="mb3 relative mt0 pl2 fw5 black-30 flex justify-between">
              <Dot/>
                Redbull <span className="f6 fw5">2015</span></li>
              <li className="mb3 relative mt0 pl2 fw5 black-30 flex justify-between">
              <Dot/>
                Nossas <span className="f6 fw5">2015</span></li>
              <li className="mb3 relative mt0 pl2 fw5 black-30 flex justify-between">
              <Dot/>
                Insitum <span className="f6 fw5">2014</span></li>
              <li className="mb3 relative mt0 pl2 fw5 black-30 flex justify-between">
              <Dot/>
                Kano <span className="f6 fw5">2014</span></li>
              <li className="mb3 relative mt0 pl2 fw5 flex  black-30 justify-between">
              <Dot/>
                FutureBrand <span className=" f6 fw5">2011</span></li>
            </ul>
          </div>
          </div>
          </div>
        </div>

      </motion.div>
  )
}

export default About

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    TomerSharon: file(relativePath: { eq: "life/tomer-sharon.png" }) {
      ...squareImage
    }
    Ariely: file(relativePath: { eq: "life/ariely.jpg" }) {
      ...squareImage
    }
    HackConf2019: file(relativePath: { eq: "life/hack-conf-2019.png" }) {
      ...squareImage
    }
    Podcast2019: file(relativePath: { eq: "life/podcast-interview.jpg" }) {
      ...squareImage
    }
    PetalWelcome: file(relativePath: { eq: "life/petal-welcome.JPG" }) {
      ...squareImage
    }
    School: file(relativePath: { eq: "life/school.JPG" }) {
      ...squareImage
    }
    NubankLead: file(relativePath: { eq: "life/nubank-lead.jpg" }) {
      ...squareImage
    }
    InsitumIntern: file(relativePath: { eq: "life/insitum-intern.png" }) {
      ...squareImage
    }
    Bossy: file(relativePath: { eq: "life/bossy-featured.png" }) {
      ...squareImage
    }
    Nossas: file(relativePath: { eq: "life/nossas.jpg" }) {
      ...squareImage
    }
    Kano: file(relativePath: { eq: "life/kano-2.jpg" }) {
      ...squareImage
    }
    CSM: file(relativePath: { eq: "life/csm.JPG" }) {
      ...squareImage
    }
    FutureBrand: file(relativePath: { eq: "life/futurebrand.jpg" }) {
      ...squareImage
    }
    Airbus: file(relativePath: { eq: "life/airbus.jpg" }) {
      ...squareImage
    }
    FirstDesign: file(relativePath: { eq: "life/first-design.jpg" }) {
      ...squareImage
    }
  }
`
