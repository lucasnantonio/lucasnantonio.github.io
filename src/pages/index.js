import { motion } from "framer-motion"
import React from "react"
import HomeSection from "../components/home-section"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { minWidth } from "../components/utils"

function IndexPage({
  data: {
    allMarkdownRemark: { edges: posts },
  },
  location,
}) {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <motion.div style={{ maxWidth: minWidth }} className="center ph0-l ph4">
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

        <HomeSection posts={posts} />
      </motion.div>
    </Layout>
  )
}

export default IndexPage

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
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
    allImageSharp {
      nodes {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            size
            cover
            path
            title
            subtitle
            problem
            solution
            impact
            learn_more
            learnings
            category
            topics
            color
            published
            snapToBottom
            team
            soon
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
