import React, { useState, useEffect } from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LifeEvents } from "../components/lifeEvents"
import { minWidth } from "../components/utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from '../components/utils';


const LifeEvent = (data, { title, year, description, image, isMilestone, icon, isHidden, link }, index) => {
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
    <div key={title} className="flex">
      {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl bw1 b--light-gray mt4 mb1"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)}
      {/* {index === 0 &&
            <motion.div
              style={{ marginLeft: "-.20rem", marginTop: ".70rem", width: ".5rem", height: ".5rem" }}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 5, opacity: 0, transition: { duration: 3, loop: Infinity } }}
              className="absolute br-pill center flex items-center justify-center bg-light-green ">
            </motion.div>} */}
      <div style={{ color: index === 0 ? "#39c070" : "black", marginLeft: icon ? "-.6rem" : "-.35rem" }} className="absolute br-pill center flex items-center justify-center f3">{icon || "•"}</div>
      <div className={`pa4 pt0 w-100 ${description && image && 'mb5'} `}>
        <div className="flex flex-column ml5-l ml0">
          <div className="flex flex-column">
            <div className="flex items-center mb4">
              <div className="f4 fw5 black-80 fw5 tracked-tight mr2 lh-copy">{title}</div> <span className="fw5 f5 black-40 mono">{year}</span>
            </div>
            {description && <div className="measure lh-copy f4 black-40 mb4">{description}</div>}
            {link && <a href={link} target="_blank" className="link hover-black measure lh-copy f4 black-40 underline-hover mb4">Read More →</a>}
          </div>
          {!reallyHidden && image &&
            <Img className={"w-50 mt3"} fluid={data[image].childImageSharp.fluid}></Img>
          }
          {isHidden && reallyHidden &&
            <div onClick={() => { hidden ? setHidden(false) : setReallyHidden(false) }}
              className="dib self-start f5 fw5 fl pa3 br3 hover-bg-near-white pointer"
              style={{ color: hidden ? "black" : "red", background: hidden ? "#f7f7f7" : "#ffe5e9" }}>
              {`${hidden ? 'Reveal' : 'Really reveal?'}`}</div>
          }
          {!isHidden && image &&
            <Img className={"w-100 mt3"} fluid={data[image].childImageSharp.fluid}></Img>
          }
        </div>
      </div>
    </div >
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
        <div className="w-100 mt6-l mt5 mb5-l mb5 center relative bb pb6-l pb5 b--near-white bw1">
          <div className="center flex justify-between flex-column" style={{ maxWidth: minWidth }}>
            <div className="flex flex-row-l flex-column items-center-l ">
              <img className="h4 w4 br-pill mr4 mb0-l mb4" src="https://pbs.twimg.com/profile_images/743210231963000832/rDY4LH1u_400x400.jpg"></img>
              <div className="ml4-l mr3 lh-copy tracked-tight flex flex-column">
                <h2 className="fw5 f3 mt0 lh-copt">In the past 10 years I’ve helped product teams research, design, code, and scale empowering experiences for millions of people.</h2>
                <div className="flex lh-copy f4 fw5 mt0-l mt4">
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
                  <a
                    target="_blank"
                    className="link black-40 hover-black-80 underline-hover mr3"
                    href="http://github.com/lucasnantonio/"
                  >
                    Github
        </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ maxWidth: minWidth }}
          className="flex w-100 justify-between flex-column center pl5-l pl3"
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