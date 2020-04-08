import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LifeEvents } from "../components/lifeEvents"
import { minWidth } from "../components/utils"



const LifeEvent = (data, { title, year, description, image }, index) => {
  const dotStyle = {
    marginLeft: "-.20rem",
    backgroundColor: "#949494",
    height: ".5rem",
    width: ".5rem",
  }

  return (
    <div key={title} className="flex ">
      {index !== LifeEvents.length - 1 ? (<div className="relative mr4 bl bw1 b--light-gray"></div>) : (<div className="relative mr4 bl bw1 b--white"></div>)}
      < div style={dotStyle} className="absolute br-pill bg-red"></div>
      <div className="pa4 ba br3 bw1 b--near-white mb4">
        <div>
          {console.log(image)}
          {image && <Img fluid={data[image].childImageSharp.fluid}></Img>}
          <div className="mb2">{year}</div>
          <div className="f4 fw5 mb3">{title}</div>
          <div className="measure lh-copy f4">{description}</div>
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
        <h1>The story of me</h1>
        {LifeEvents.map((item, index) => LifeEvent(data, item, index))}
      </div>
    </Layout >
  )
}

export default About

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
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
  }
`