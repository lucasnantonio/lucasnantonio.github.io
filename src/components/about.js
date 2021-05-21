import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { minWidth, topics } from "../components/utils"
import ImageWithBackground from "../components/imageWithBackground"
const About = () => {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="br2 ba b--black-10 mt4"
        src="https://i.postimg.cc/QtxFVzBb/Bild007-Neg-Nr-8-1.jpg"
      ></motion.img>
      <motion.h1
        // layoutId="site-title"
        initial={{
          opacity: 0,
          marginTop: 75,
          marginBottom: 75,
        }}
        animate={{ opacity: 1, marginTop: 50, marginBottom: 50 }}
        transition={{ duration: 0.55 }}
        className="f1-l f2 fw7 lh-title tracked-tight measure-narrow"
      >
        Product designer working at Twitter and teaching Behavioral Design at
        Aprender.
      </motion.h1>
      <div className="f3 fw4 lh-copy mb3 black-50 lh-copy f4 measure">
        <p>
          I've been designing products and services since 2010, and even though
          my home has always been with design, I can frequently be found
          exploring disciplines I'm curious about, such as product management,
          qualitative research, code, team management, and others.{" "}
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
          , in São Paulo, where we disrupted the complexity of Latin American
          banks while growing a vibrant, diverse, international{" "}
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
          Ask me about the time when I interviewed Dan Ariely on a stage, about
          my{" "}
          <a
            className="underline link black-50"
            href="https://patents.justia.com/patent/9809239"
            target="_blank"
          >
            patent to recycle bin for airplanes
          </a>
          , the time I made personas for cows, co-founded a furniture shop, or
          when{" "}
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
          . You can also find stories about my early work as a student on{" "}
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
