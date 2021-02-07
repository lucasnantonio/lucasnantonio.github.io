import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import About from "../components/about"
import Hello from "../components/hello"
import HomeSection from "../components/home-section"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tabs from "../components/tabs"
import { minWidth, topics } from "../components/utils"

function IndexPage({
  data: {
    allMarkdownRemark: { edges: posts },
    allImageSharp: { nodes: images },
  },
}) {
  const [isAll, setAll] = useState(true)
  const [selectedTopics, setSelectedTopics] = useState(topics)
  const [selectedTab, setSelectedTab] = useState("Work")
  const [isWorkHovered, setWorkHovered] = useState(false)
  const [isAboutHovered, setAboutHovered] = useState(false)

  const publishedPosts = posts.filter(
    item => item.node.frontmatter.soon === null
  )

  return (
    <Layout
      isIndex
      isAll={isAll}
      setAll={setAll}
      selectedTopics={selectedTopics}
      setSelectedTopics={setSelectedTopics}
    >
      <SEO title="Home" />
      <Hello setSelectedTopics={setSelectedTopics} setAll={setAll} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        isAboutHovered={isAboutHovered}
        isWorkHovered={isWorkHovered}
      ></Tabs>
      <div
        className="overflow-y-hidden center pt4"
        style={{ maxWidth: minWidth }}
      >
        <AnimatePresence exitBeforeEnter>
          {selectedTab === "About" ? (
            <motion.div
              transition={{ duration: 0.3 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              key={"about"}
            >
              <About />
            </motion.div>
          ) : (
            <motion.div
              transition={{ duration: 0.3 }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              key={"work"}
            >
              <HomeSection posts={posts} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
