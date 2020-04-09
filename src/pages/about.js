import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LifeEvents } from "../components/lifeEvents"
import { minWidth } from "../components/utils"



const LifeEvent = (data, { title, year, description, image, isMilestone, icon }, index) => {
  const dotStyle = !isMilestone ? {
    marginLeft: "-.20rem",
    // marginTop: "2.rem",
    backgroundColor: "#949494",
    height: ".5rem",
    width: ".5rem",
  } : {
      marginLeft: "-1.5rem",
      // marginTop: "2.rem",
      backgroundColor: "#f3f3f3",
      height: "3rem",
      width: "3rem",
    }

  return (
    isMilestone ? (
      <div key={title} className="flex ">
        {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl bw1 b--light-gray"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)
        }
        <div style={dotStyle} className="absolute br-pill center flex items-center justify-center">{icon}</div>
        <div className="mb4">
          <div>
            {console.log(image)}
            {image && <Img className={"mb3"} fluid={data[image].childImageSharp.fluid}></Img>}
            <div className="ml4">{year}</div>
            <div className="f4 fw5 mb3 black-80 pt2 mt1 ml4">{title}</div>
          </div>
        </div>
      </div >
    ) : (
        <div key={title} className="flex">
          {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl bw1 b--light-gray"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)}
          <div style={dotStyle} className="absolute br-pill"></div>
          <div className="pa4 ba br3 bw1 b--near-white mb4 w-70-l">
            <div>
              {console.log(image)}
              {image && <Img className={"mb3"} fluid={data[image].childImageSharp.fluid}></Img>}
              <div className="mb2">{year}</div>
              <div className="f4 fw5 mb3 black-80">{title}</div>
              <div className="measure lh-copy f4 black-80">{description}</div>
            </div>
          </div>
        </div >
      )
  )
}

const milestoneEvent = (data, { title, year, description, image }, index) => {
  const dotStyle = {
    marginLeft: "-.20rem",
    // marginTop: "2.rem",
    backgroundColor: "#949494",
    height: ".5rem",
    width: ".5rem",
  }

  return (
    <div key={title} className="flex ">
      {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl bw1 b--light-gray"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)}
      <div style={dotStyle} className="absolute br-pill bg-red"></div>
      <div className="pa4 ba br3 bw1 b--near-white mb4 w-70-l">
        <div>
          {console.log(image)}
          {image && <Img className={"mb3"} fluid={data[image].childImageSharp.fluid}></Img>}
          <div className="mb2">{year}</div>
          <div className="f4 fw5 mb3 black-80">{title}</div>
          <div className="measure lh-copy f4 black-80">{description}</div>
        </div>
      </div>
    </div >
  )
}

const About = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="About me" />
      <div
        style={{ maxWidth: minWidth }}
        className="flex w-100 justify-between flex-column center"
      >
        <h1 className="fw5 black-80 tracked-tight mv5">The story of me</h1>
        {LifeEvents.map((item, index) => LifeEvent(data, item, index))}
      </div>
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
  }
`