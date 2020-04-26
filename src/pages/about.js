import React, { useState, useEffect } from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LifeEvents } from "../components/lifeEvents"
import { minWidth } from "../components/utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from '../components/utils';


const LifeEvent = (data, { title, year, description, image, isMilestone, icon, isHidden, books }, index) => {
  const [hidden, setHidden] = useState(true)
  const [reallyHidden, setReallyHidden] = useState(true)

  const dotStyle = !isMilestone ? {
    marginLeft: "-.35rem",
    marginTop: ".35rem",
    backgroundColor: index === 0 ? "#2cd477" : "#222",
    height: ".8rem",
    width: ".8rem",
    border: "2px solid white",
  } : {
      // marginLeft: "-1.5rem",
      // marginTop: "-.6rem",
      // backgroundColor: "#f3f3f3",
      marginLeft: "-.20rem",
      marginTop: ".55rem",
      height: ".5rem",
      width: ".5rem",
    }

  return (
    isHidden ? (
      <div key={title} className="flex">
        {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl bw1 b--light-gray mt4 mb1"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)}
        <div style={dotStyle} className="absolute br-pill"></div>
        <div className="pa4 pt0 w-100 mb5">
          <div className="flex flex-column items-start">
            <div className="flex flex-column">
              <div className="flex items-center mb4">
                <div className="f3 fw5 black-80 fw5 tracked-tight mr2">{title} <span className="fw5 f4 black-40">{year}</span></div>

              </div>
              <div className="measure lh-copy f4 black-80 mb4">{description}</div>
            </div>
            {!reallyHidden && image && <Img className={"w-100 mt3"} fluid={data[image].childImageSharp.fluid}></Img>}
            {reallyHidden && <div onClick={() => { hidden ? setHidden(false) : setReallyHidden(false) }} className="dib f5 fw5 fl pa3 br3 hover-bg-near-white pointer" style={{ color: hidden ? "black" : "red", background: hidden ? "#f7f7f7" : "#ffe5e9" }}>{`${hidden ? 'Reveal' : 'Really reveal'}`}</div>}
          </div>
        </div>
      </div >
    ) :
      isMilestone ? (
        <div key={title} className="flex">
          {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl mt4 bw1 b--light-gray"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)
          }
          <div style={dotStyle} className="absolute br-pill center flex items-center justify-center">{icon}</div>
          <div className="mb5 pb3">
            <div className="flex items-center">
              <div className="f3 fw5 black-80 ml4 fw5 tracked-tight">{title}</div>
              <div className="ml2 fw5 f4 black-40">{year}</div>
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
            <div className={`pa4 pt0 w-100 ${description && image && 'mb5'} `}>
              <div className="flex flex-column">
                <div className="flex flex-column">
                  <div className="flex items-center mb4">
                    <div className="f3 fw5 black-80 fw5 tracked-tight mr2">{title} <span className="fw5 f4 black-40">{year}</span></div>

                  </div>
                  <div className="measure lh-copy f4 black-40 mb4">{description}</div>
                </div>
                {image && <Img className={"w-100 mt3"} fluid={data[image].childImageSharp.fluid}></Img>}
                {books && <div className="pa3 ba flex flex-column mt4">
                  <h4 className="fw5 mt0 mb3">Reading list then</h4>
                  <div className="flex pa2 pr3 br2 items-center self-start justify-start">
                    {<Img className={"w2 br1 mr3"} fluid={data[books[0].image].childImageSharp.fluid}></Img>}
                    {books[0].title}
                  </div>
                </div>}
              </div>
            </div>
          </div >
        )
  )
}

const About = ({ data }) => {
  const [isScrolled, setScrolled] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.pageYOffset > 500)
    }
  }
  )
  const backToTheFuture = () => {
    const [isHovered, setHover] = useState(false)
    return (
      <AnimatePresence>
        {isScrolled &&
          <motion.div
            style={{ left: 0, right: 0, top: 30 }}
            className="w-100 fixed z-max flex justify-center" initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onMouseDown={() => setHover(false)}
              onMouseUp={() => setHover(true)}
              style={{ transition: "box-shadow .2s", boxShadow: !isHovered ? "0 0 15px rgba(0,0,0,.25)" : "0 0 25px rgba(0,0,0,.2)", color: !isHovered ? "#666" : "#181818" }}
              className="pa3 br-pill bg-white black pointer fw5">
              Back to the future ↺
            </div>
          </motion.div>
        }
      </AnimatePresence>
    )
  }
  return (
    <Layout>
      <SEO title="About me" />
      <motion.div initial={initialFadeAnimation} animate={fadeInAnimation} transition={{ duration: 0.5 }}>
        <div className="w-100 mt6 mb6 center relative bb b--near-white bw1 pb6">
          <div className="center flex justify-between" style={{ maxWidth: minWidth }}>
            <div>
              <h1 className="mt0 fw5 black-80 tracked-tight f3 mb0 measure lh-copy">I am a designer helping companies research, design, code (a little) and scale empowering experiences. Currently leading the design team at Petal in New York. Previously, I've worked at great design schools such as Nubank, Insitum/Fjord, Kano Computer, and FutureBrand.</h1>
              {/* <h1 className="fw5 black-40 tracked-tight mt0 f3">Scroll down, let's travel back in time. <span className="black">⏱</span></h1> */}
            </div>
            <div className="flex-l dn flex-column lh-copy f">
              {/* <h4 className="mb1 fw5">Contact</h4> */}
              <a
                className="link black-40 hover-black-80 underline-hover mr3"
                href="mailto:lucasneumann.fau@gmail.com"
              >
                Email me
        </a>
              <a
                target="_blank"
                className="link black-40 hover-black-80 underline-hover mr3"
                href="https://www.linkedin.com/in/lucasneumann/"
              >
                LinkedIn
        </a>
              <a
                target="_blank"
                className="link black-40 hover-black-80 underline-hover mr3"
                href="https://twitter.com/@lucasnantonio"
              >
                Twitter
        </a>
            </div>
          </div>
        </div>
        <div
          style={{ maxWidth: minWidth }}
          className="flex w-100 justify-between flex-column center"
        >
          {backToTheFuture()}
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
    TomerSharon: file(relativePath: { eq: "life/tomer-sharon.JPG" }) {
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
    PredictablyIrrational: file(relativePath: { eq: "life/books/predictably-irrational.jpg" }) {
      ...squareImage
    }
  }
`