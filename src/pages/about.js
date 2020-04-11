import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LifeEvents } from "../components/lifeEvents"
import { minWidth } from "../components/utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from '../components/utils';


const LifeEvent = (data, { title, year, description, image, isMilestone, icon }, index) => {
  const dotStyle = !isMilestone ? {
    marginLeft: "-.20rem",
    marginTop: ".55rem",
    backgroundColor: index === 0 ? "#2cd477" : "#222",
    height: ".5rem",
    width: ".5rem",
  } : {
      marginLeft: "-1.5rem",
      marginTop: "-.6rem",
      backgroundColor: "#f3f3f3",
      height: "3rem",
      width: "3rem",
    }

  return (
    isMilestone ? (
      <div key={title} className="flex">
        {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl bw1 b--light-gray"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)
        }
        <div style={dotStyle} className="absolute br-pill center flex items-center justify-center">{icon}</div>
        <div className="mb6">
          <div className="flex items-center">
            <div className="f3 fw5 black-80 ml4 fw5 tracked-tight">{title}</div>
            <div className="ml2 black-40">{year}</div>
          </div>
        </div>
      </div >
    ) : (
        <div key={title} className="flex">
          {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl bw1 b--light-gray mt4 mb1"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)}
          {index === 0 &&
            <motion.div
              style={{ marginLeft: "-.20rem", marginTop: ".50rem", width: ".5rem", height: ".5rem" }}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 5, opacity: 0, transition: { duration: 3, loop: Infinity } }}
              className="absolute br-pill center flex items-center justify-center bg-light-green ">
            </motion.div>}
          <div style={dotStyle} className="absolute br-pill"></div>
          <div className="pa4 pt0 w-70-l mb5">
            <div className="flex flex-column">
              <div className="flex flex-column">
                <div className="flex items-center mb4">
                  <div className="f3 fw5 black-80 fw5 tracked-tight mr2">{title} <span className="fw5 f4 black-40">{year}</span></div>

                </div>
                <div className="measure lh-copy f4 black-80 mb4">{description}</div>
              </div>
              {image && <Img className={"w-100 mt3"} fluid={data[image].childImageSharp.fluid}></Img>}
            </div>
          </div>
        </div >
      )
  )
}

const About = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="About me" />
      <motion.div initial={initialFadeAnimation} animate={fadeInAnimation} transition={{ duration: 0.5 }}>
        <div className="w-100 mv6 center ">
          <div className="center" style={{ maxWidth: minWidth }}>
            <h1 className="fw5 black-80 tracked-tight f3 mb0">About me</h1>
            <h1 className="fw5 black-40 tracked-tight mt0 f3">Scroll down, let's travel back in time. <span className="black">🕰</span></h1>
          </div>
        </div>
        <div
          style={{ maxWidth: minWidth }}
          className="flex w-100 justify-between flex-column center"
        >
          {LifeEvents.map((item, index) => LifeEvent(data, item, index))}
        </div>
      </motion.div>
    </Layout >
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
  }
`