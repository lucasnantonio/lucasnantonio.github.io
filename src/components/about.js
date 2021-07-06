import { motion } from "framer-motion"
import React from "react"
import { minWidth } from "../components/utils"
import { graphql } from "gatsby"
import { Headline } from "../components/headline"

const About = () => {
  return (
    <div style={{ maxWidth: minWidth }} className="ph0-l layout-grid center">
      <Headline></Headline>
      <img
        style={{ gridColumn: "sidebar-start / main-end" }}
        src="https://i.postimg.cc/QtxFVzBb/Bild007-Neg-Nr-8-1.jpg"
      ></img>
      <div
        className=" pv6 f4 lh-copy mb3 black lh-copy measure ph4"
        style={{ gridColumn: "main-start / main-end" }}
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
            className="underline link black"
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
            className="underline link black"
            href="https://www.aprender.design"
            target="_blank"
          >
            Aprender
          </a>
          , an online design school in Brazil.
        </p>

        <p>
          Previously, I was part of the early team at{" "}
          <a
            className="underline link black"
            href="https://nu.bank"
            target="_blank"
          >
            Nubank
          </a>
          , building the world's biggest digital bank from scratch while growing
          a vibrant, diverse, international{" "}
          <a
            className="underline link black"
            href="https://building.nubank.com.br/design/"
            target="_blank"
          >
            design organization
          </a>
          .
        </p>
        <p>
          I have helped design online platforms for activism at{" "}
          <a
            className="underline link black"
            href="https://nossas.org/"
            target="_blank"
          >
            Nossas
          </a>
          ; patented a{" "}
          <a
            className="underline link black"
            href="https://patents.justia.com/patent/9809239"
            target="_blank"
          >
            {" "}
            recycling system{" "}
          </a>{" "}
          for airplanes with Airbus; ran an online{" "}
          <a
            className="underline link black"
            target="_blank"
            href="https://www.instagram.com/projetofeito/"
          >
            furniture shop
          </a>
          , and helped{" "}
          <a
            className="underline link black"
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
              className="underline link black"
              target="_blank"
              href="https://www.fastcompany.com/3028572/this-simple-tool-will-help-you-stop-working-ridiculous-hours"
            >
              FastCompany
            </a>{" "}
            and{" "}
            <a
              className="underline link black"
              href="https://www.wired.com/2014/04/work-2-0-a-web-connected-sticky-note-that-bosses-you-around/"
              target="_blank"
            >
              Wired
            </a>
            .
          </p>
        </p>
      </div>
    </div>
  )
}

export default About
