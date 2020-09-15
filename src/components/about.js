import React, { useState, useEffect } from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "./layout"
import SEO from "./seo"
import { LifeEvents } from "./lifeEvents"
import { minWidth } from "./utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "./utils"
import { Link } from "gatsby"
const Dot = () => (              <span style={{position: "absolute", width: "6px", height: "6px", background: "gray", borderRadius: "100%", left: "-18px", top: ".75rem"}}></span>)

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
        <div className="f4 fw4 lh-copy w-100 mt5 mb3 center relative pb6-l pb5 b--near-white bw1">
            <div
              className="center flex justify-between flex-column"
              style={{ maxWidth: minWidth }}
            >
              <img src="https://i.postimg.cc/Bv4LjfKD/Bild007-Neg-Nr-8.jpg"></img>
                <div className="flex flex-row-l flex-column mt5 justify-between ">
                <div>
              <div style={{letterSpacing: -0.19, width:"30em"}} className="mr6-l mr0 black-70 ">
                <p className="mt0">I've spent a decade learning about people, business, technology, and how to help them work in harmony.</p>
                <p>
                Most notably, I was part of the early design team at Nubank, now one of the largest digital banks in the world. Surrounded by brilliant people, I helped fight the complexity of money while growing a vibrant, diverse, international design organization.
                </p>
                <p>
                Design has taken me around the world to experience different cultures, disciplines and problems. I've delved into graphic, industrial, service, digital design, and code. I've worked with agencies, consultancies, non-profits, retailers, small and large tech companies. 
                </p>
                <p>
                Design has also given me the priviledge to follow my curiosities about the human mind, the built environment, society, science, and philosophy.
                </p>
                {/* <p>I currently work at Twitter, in New York.</p> */}
              </div>
              </div>
            <div className="mt0-l mt5 w-100 ">
            {/* <h4 className="mt0 fw7">Career</h4> */}
            <ul style={{paddingLeft: 20}} className="relative mt0">
              <div style={{lineHeight:"20rem", position: "absolute", top: 12, bottom: 12, left: 4.5, width: 1, border: "1px solid #f3f3f3", zIndex: -3}}></div>
              {/* <li className="mb3 pl2 fw6 black">Twitter</li> */}
              <li className="relative mb3 pl2 fw6 black-40 flex justify-between">
              <Dot/>
                Petal <span className="black-20">2019-2020</span></li>
              <li className="relative mb3 pl2 fw6 black-40 flex justify-between">
              <Dot/>
                Nubank <span className="black-20">2016-2019</span></li>
              <li className="relative mb3 pl2 fw6 black-40 flex justify-between">
              <Dot/>
                Airbus <span className="black-20">2016</span></li>
              <li className="relative mb3 pl2 fw6 black-40 flex justify-between">
              <Dot/>
                Redbull <span className="black-20">2015</span></li>
              <li className="relative mb3 pl2 fw6 black-40 flex justify-between">
              <Dot/>
                Nossas <span className="black-20">2015</span></li>
              <li className="relative mb3 pl2 fw6 black-40 flex justify-between">
              <Dot/>
                Insitum <span className="black-20">2014-2015</span></li>
              <li className="relative mb3 pl2 fw6 black-40 flex justify-between">
              <Dot/>
                Kano <span className="black-20">2014</span></li>
              <li className="relative mb3 pl2 fw6 black-40 flex justify-between">
              <Dot/>
                FutureBrand <span className="black-20">2011</span></li>
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
