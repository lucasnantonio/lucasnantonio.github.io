import React, { useState, useEffect } from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "./layout"
import SEO from "./seo"
import { LifeEvents } from "./lifeEvents"
import { minWidth } from "./utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "./utils"
import { Link } from "gatsby"


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
        <div className="f3 fw4 lh-copy w-100 mt5 mb3 center relative pb6-l pb5 b--near-white bw1">
          <div
            className="center flex justify-between flex-column"
            style={{ maxWidth: minWidth }}
          >
            <img src="https://i.postimg.cc/Bv4LjfKD/Bild007-Neg-Nr-8.jpg"></img>
          <div className="measure black-70 mt5 tracked-tight">
           <p>I've spent a decade learning about people, business, technology, and how to make them work in harmony.</p>
           <p>
           Most notably, I was part of the early design team at Nubank, now one of the largest digital banks in the world. Surrounded by amazing people, I helped challenge the monopoly, pain, and complexity of money, while growing a vibrant, user-centered, international design organization.
           </p>
           <p>
           Design has taken me around the world, and I've bene lucky to have worked in different countries where I could immerse myself in different disciplines and problems. I have helped design a computer for all ages at Kano in the UK, a better banking system in São Paulo, and now live in New York where I work at Twitter serving the public conversation.
           </p>
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
