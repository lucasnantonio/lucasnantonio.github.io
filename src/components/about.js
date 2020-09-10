import React, { useState, useEffect } from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "./layout"
import SEO from "./seo"
import { LifeEvents } from "./lifeEvents"
import { minWidth } from "./utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "./utils"
import { Link } from "gatsby"

export const LifeEvent = (
  data,
  { title, year, description, image, icon, isHidden, link },
  index
) => {
  const [hidden, setHidden] = useState(true)
  const [reallyHidden, setReallyHidden] = useState(true)

  return (
    <div key={title} className="flex">
      {index !== LifeEvents.length - 1 ? (
        <div
          className={`relative mr4 bl b--near-white ${index === 0 && "mt5"}`}
        ></div>
      ) : (
        <div className="relative mr4 bl  b--white"></div>
      )}
      <div
        style={{
          marginLeft: "-1.8rem",
          marginTop: "3.1rem",
        }}
        className="absolute br-pill center flex items-center justify-center f3"
      >
        <img
          className="ba br-pill bw3 b--white"
          style={{ width: "40px" }}
          src={icon}
        ></img>
      </div>
      <div
        className={`b--near-white w-100 pv5 pl5-l pv2 ml4
      ${index === 0 && "bt"}
      ${index !== LifeEvents.length - 1 && "bb"}
      `}
      >
        <div className="flex flex-column">
          <div className="flex flex-column">
            <div className="flex justify-between items-start">
              {!link ? (
                <div className="f4 fw4 black-80 tracked lh-copy mr3">
                  {title}
                </div>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link underline-hover f4 mr3 black-80 tracked-tight lh-copy"
                >
                  {title} ↗
                </a>
              )}
              <span className="fw5 f5 black-40 mono mt2">{year}</span>
            </div>
            {description && (
              <div className="lh-copy f4 black-40 mr6-l mt4">{description}</div>
            )}
          </div>
          {!reallyHidden && image && (
            <>
              <Img
                className={"w-50 mt4"}
                fluid={data[image].childImageSharp.fluid}
              ></Img>
              <p className="f4 black-40">
                Now, please don't leave with this as your last impression, go
                look at{" "}
                <Link
                  className="link black underline black-40"
                  to="/blog/petal-before-and-after"
                >
                  more recent work.
                </Link>
              </p>
            </>
          )}
          {isHidden && reallyHidden && (
            <div
              onClick={() => {
                hidden ? setHidden(false) : setReallyHidden(false)
              }}
              className="mt4 dib self-start f5 fw5 fl pa3 br3 hover-bg-near-white pointer"
              style={{
                color: hidden ? "black" : "red",
                background: hidden ? "#f7f7f7" : "#ffe5e9",
              }}
            >
              {`${hidden ? "Reveal" : "Really reveal?"}`}
            </div>
          )}
          {/* {!isHidden && image && (
            <>
              <Img
                className={"w-100 mt5"}
                fluid={data[image].childImageSharp.fluid}
              ></Img>
            </>
          )} */}
        </div>
      </div>
    </div>
  )
}

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
        <div className="w-100 mt6-l mt5 mb3 center relative pb6-l pb5 b--near-white bw1">
          <div
            className="center flex justify-between flex-column"
            style={{ maxWidth: minWidth }}
          >
            <div className="flex flex-row-l flex-column items-center-l ">
              <img
                className="h4 w4 br-pill mr4 mb0-l mb4"
                src="https://pbs.twimg.com/profile_images/743210231963000832/rDY4LH1u_400x400.jpg"
              ></img>
              <div className="ml4-l mr3 lh-copy tracked-tight flex flex-column">
                <h2 className="fw5 f3 mt0 lh-copy measure">
                  In the past 10 years I’ve helped product teams research,
                  design, code, and scale empowering experiences for millions of
                  people.
                </h2>
                <div className="flex lh-copy f4 fw5 mt0-l mt4">
                  <a
                    className="link black-40 hover-black-80 underline-hover mr3"
                    href="mailto:lucasneumann.fau@gmail.com"
                  >
                    Email me
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link black-40 hover-black-80 underline-hover mr3"
                    href="https://www.linkedin.com/in/lucasneumann/"
                  >
                    LinkedIn
                  </a>
                  <a
                    rel="noopener noreferrer"
                    className="link black-40 hover-black-80 underline-hover mr3"
                    href="https://twitter.com/@lucasnantonio"
                  >
                    Twitter
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
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
          {LifeEvents.map((item, index) => LifeEvent(data, item, index))}
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
