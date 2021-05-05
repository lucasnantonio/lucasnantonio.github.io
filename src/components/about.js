import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { minWidth } from "./utils"
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
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="f3 fw4 w-100 lh-copy mb3 pb0 b--near-white bw1">
        <div
          className="flex justify-between flex-column"
          style={{ maxWidth: minWidth }}
        >
          {/* IMAGE */}
          <img
            className="br2 ba b--black-10"
            src="https://i.postimg.cc/QtxFVzBb/Bild007-Neg-Nr-8-1.jpg"
          ></img>
          <div className="flex flex-row-l flex-column mt4 mw-100-l">
            {/* ABOUT */}
            <div className="mt0-l black-50 lh-copy measure pr4-l f4">
              <div>
                <h2 className="fw6 f3 fw6 mt4">Hello! 👋</h2>
                <p className="mt4">
                  I'm a Brazilian product designer living in New York. <br />
                  <br />
                  I've been designing products and services since 2010, and even
                  though my home has always been with design, I can frequently
                  be found exploring disciplines I'm curious about, such as
                  product management, qualitative research, code, team
                  management, and others.{" "}
                </p>
                <p>
                  I was part of the early design team at{" "}
                  <a
                    className="underline link black-50"
                    href="https://nu.bank"
                    target="_blank"
                  >
                    Nubank
                  </a>
                  , in São Paulo, where we disrupted the complexity of Latin
                  American banks while growing a vibrant, diverse, international{" "}
                  <a
                    className="underline link black-50"
                    href="https://building.nubank.com.br/design/"
                    target="_blank"
                  >
                    design organization
                  </a>
                  .
                </p>
                <p>
                  Ask me about the time when I interviewed Dan Ariely on a
                  stage, about my{" "}
                  <a
                    className="underline link black-50"
                    href="https://patents.justia.com/patent/9809239"
                    target="_blank"
                  >
                    patent to recycle bin for airplanes
                  </a>
                  , the time I made personas for cows, co-founded a furniture
                  shop, or when{" "}
                  <a
                    className="underline link black-50"
                    target="_blank"
                    href="https://www.lorriewhittington.co.uk/wp-content/uploads/Handwritten-Typeface-by-Lucas-Neumann.jpg"
                  >
                    this poster
                  </a>{" "}
                  was featured in a{" "}
                  <a
                    className="underline link black-50"
                    href="https://www.mu.nl/en/exhibitions/for-play-shaping-sexuality"
                    target="_blank"
                  >
                    {" "}
                    Dutch exhibition about sex
                  </a>
                  . You can also find stories about my early work as a student
                  on{" "}
                  <a
                    className="underline link black-50"
                    target="_blank"
                    href="https://www.fastcompany.com/3028572/this-simple-tool-will-help-you-stop-working-ridiculous-hours"
                  >
                    FastCompany
                  </a>{" "}
                  and{" "}
                  <a
                    className="underline link black-50"
                    href="https://www.wired.com/2014/04/work-2-0-a-web-connected-sticky-note-that-bosses-you-around/"
                    target="_blank"
                  >
                    Wired
                  </a>
                  .
                </p>
                <p>
                  I currently work as Staff Designer @ Twitter, in NYC. <br />
                </p>
              </div>
            </div>

            {/* CAREER */}
            {/* <div className="pl4-l pl0 w-40 lh-copy">
            <ul className="relative mt0 pl0">
              <li className="">
                Twitter <span className="">NOW</span>
              </li>
              <li className="">Petal 2019</li>
              <li className="">Nubank 2016</li>
              <li className="">Airbus 2016</li>
              <li className="">Redbull 2015</li>
              <li className="">Nossas 2015</li>
              <li className="">Insitum / Accenture 2014</li>
              <li className="">Kano Computer 2014</li>
              <li className="">FutureBrand 2011</li>
            </ul>
          </div> */}
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
