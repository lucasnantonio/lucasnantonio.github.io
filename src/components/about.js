import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { minWidth, topics } from "../components/utils"
import ImageWithBackground from "../components/imageWithBackground"
const About = () => {
  return (
    <motion.div
      key="about"
      style={{ maxWidth: minWidth }}
      className="center ph0-l"
    >
      <motion.h1
        layoutId="site-title"
        initial={{
          opacity: 0,
          y: 25,
          marginTop: 200,
          marginBottom: 200,
        }}
        animate={{ opacity: 1, y: 0, marginTop: 200, marginBottom: 200 }}
        transition={{ duration: 0.55 }}
        className="fw4 f3 tracked-tight lh-copy"
      >
        Product designer at Twitter & <br></br> Behavioral design teacher at
        Aprender.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="f3 fw4 lh-copy mb3 black-50 lh-copy tracked-tight measure pb6"
      >
        <p>I have been designing products and services since 2010.</p>
        <p>
          I'm drawn to teams working on difficult and meaningful issues, and can
          frequently be found stepping outside the design role into product
          management, research, code, writing, or whatever is necessary to bring
          clarity to a problem.
        </p>
        <p>
          Currently, at Twitter, I'm helping build{" "}
          <a
            className="underline link black-50"
            href="https://twitter.github.io/birdwatch/"
            target="_blank"
          >
            Birdwatch
          </a>
          , an experiment that aims to tackle online misinformation through
          decentralization.
        </p>

        <p>
          I also teach a class about Behavioral Design at{" "}
          <a
            className="underline link black-50"
            href="https://aprender.design"
            target="_blank"
          >
            Aprender
          </a>
          , an online design school in Brazil.
        </p>

        <p>
          Previously, I was part of the early team at{" "}
          <a
            className="underline link black-50"
            href="https://nu.bank"
            target="_blank"
          >
            Nubank
          </a>
          , building the world's biggest digital bank from scratch while growing
          a vibrant, diverse, international{" "}
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
          I have helped design online platforms for activism at Nossas; patented
          a{" "}
          <a
            className="underline link black-50"
            href="https://patents.justia.com/patent/9809239"
            target="_blank"
          >
            {" "}
            recycling system{" "}
          </a>{" "}
          for airplanes with Airbus; ran an online{" "}
          <a
            className="underline link black-50"
            target="_blank"
            href="https://www.instagram.com/projetofeito/"
          >
            furniture shop
          </a>
          , and helped{" "}
          <a
            className="underline link black-50"
            target="_blank"
            href="https://www.kano.me"
          >
            Kano
          </a>{" "}
          build the first version of their computer that teaches kids how to
          code.
          <p>
            {" "}
            You can also find stories about my student work on{" "}
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
        </p>
      </motion.div>
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
