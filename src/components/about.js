import React, { useState, useEffect } from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "./layout"
import SEO from "./seo"
import { LifeEvents } from "./lifeEvents"
import { minWidth } from "./utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "./utils"
import { Link } from "gatsby"
const Dot = ({ black }) => (
  <span
    style={{
      position: "absolute",
      width: "7px",
      height: "7px",
      background: black ? "black" : "#f7f7f7",
      borderRadius: "100%",
      left: "-22px",
      top: ".45rem",
      border: "4px solid white",
    }}
  ></span>
)

const About = ({ data }) => {
  const [isScrolled, setScrolled] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.pageYOffset > 500)
    }
  })

  return (
    <div className="f4 fw4 w-100 lh-copy mb3 pb0 b--near-white bw1">
      <div
        className="flex justify-between flex-column"
        style={{ maxWidth: minWidth }}
      >
        {/* IMAGE */}
        <img src="https://i.postimg.cc/QtxFVzBb/Bild007-Neg-Nr-8-1.jpg"></img>
        <div className="flex flex-row-l flex-column mt5 mw-100-l">
          {/* ABOUT */}
          <div
            style={{ letterSpacing: -0.19 }}
            className="mt0-l black-80 fw5 lh-copy w-100 pr4-l"
          >
            <h3 className="fw6 f4 bb bw2 b--near-white pb3 mb4 fw8">
              About me
            </h3>
            <div className="measure">
              <p className="mt0 ">
                I'm a designer who's had the chance to wear many hats over the
                years, including PM, qualitative researcher, team manager,
                mentor, and code enthusiast. Design has given me the privilege
                to follow my curiosity for the human mind, built environment,
                business, technology, science, and philosophy.{" "}
              </p>
              <p>
                Most notably, I was part of the early design team at{" "}
                <a
                  className="underline link black-80"
                  href="https://nu.bank"
                  target="_blank"
                >
                  Nubank
                </a>
                , in São Paulo, where we disrupted the complexity of Latin
                American banks while growing a vibrant, diverse, international{" "}
                <a
                  className="underline link black-80"
                  href="https://building.nubank.com.br/design/"
                  target="_blank"
                >
                  design organization
                </a>
                .
              </p>
              <p>
                Ask me about the time when I interviewed Dan Ariely on a stage,{" "}
                <a
                  className="underline link black-80"
                  href="https://patents.justia.com/patent/9809239"
                  target="_blank"
                >
                  patented a recycling bin for airplanes
                </a>
                , made personas for cows, co-founded a furniture shop, or when{" "}
                <a
                  className="underline link black-80"
                  target="_blank"
                  href="https://www.lorriewhittington.co.uk/wp-content/uploads/Handwritten-Typeface-by-Lucas-Neumann.jpg"
                >
                  this poster
                </a>{" "}
                was featured in a{" "}
                <a
                  className="underline link black-80"
                  href="https://www.mu.nl/en/exhibitions/for-play-shaping-sexuality"
                  target="_blank"
                >
                  {" "}
                  Dutch exhibition about sex
                </a>
                . You can also find stories about my early work on{" "}
                <a
                  className="underline link black-80"
                  target="_blank"
                  href="https://www.fastcompany.com/3028572/this-simple-tool-will-help-you-stop-working-ridiculous-hours"
                >
                  FastCompany
                </a>{" "}
                and{" "}
                <a
                  className="underline link black-80"
                  href="https://www.wired.com/2014/04/work-2-0-a-web-connected-sticky-note-that-bosses-you-around/"
                  target="_blank"
                >
                  Wired
                </a>
                .
              </p>
              <p>
                I currently work as Staff Designer @ Twitter, in NYC. <br />
                <br />
              </p>
            </div>
          </div>

          {/* CAREER */}
          <div className="pl4-l pl0 w-100 lh-copy">
            <h3 className="fw6 f4 bb bw2 pb3 mb4 b--near-white fw8">Career</h3>
            <ul className="relative mt0 pl0">
              <li className="mb3 relative flex justify-between mt0 fw5 black">
                Twitter{" "}
                <span className="black-80 ttu f6 tracked fw8 lh-copy">
                  {/* <motion.span
                    style={{ lineHeight: "2rem" }}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    ●
                  </motion.span>{" "} */}
                  NOW
                </span>
              </li>
              <li className="relative pv3 fw5 black-40 flex justify-between bt bw2 b--near-white">
                Petal <span className="f6 fw5">2019</span>
              </li>
              <li className="relative pv3 fw5 black-40 flex justify-between bt bw2 b--near-white">
                Nubank <span className="f6 fw5">2016</span>
              </li>
              <li className="relative pv3 fw5 black-40 flex justify-between bt bw2 b--near-white">
                Airbus <span className="f6 fw5">2016</span>
              </li>
              <li className="relative pv3 fw5 black-40 flex justify-between bt bw2 b--near-white">
                Redbull <span className="f6 fw5">2015</span>
              </li>
              <li className="relative pv3 fw5 black-40 flex justify-between bt bw2 b--near-white">
                Nossas <span className="f6 fw5">2015</span>
              </li>
              <li className="relative pv3 fw5 black-40 flex justify-between bt bw2 b--near-white">
                Insitum / Accenture <span className="f6 fw5">2014</span>
              </li>
              <li className="relative pv3 fw5 black-40 flex justify-between bt bw2 b--near-white">
                Kano Computer <span className="f6 fw5">2014</span>
              </li>
              <li className="relative pv3 fw5 flex  black-40 justify-between bt bw2 b--near-white">
                FutureBrand <span className=" f6 fw5">2011</span>
              </li>
              <li className="dn white mb4 relative mt0 pl2 fw5 flex-l justify-between bt bw2 b--near-white">
                Obscure small internships <span className=" f6 fw5">2010</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
