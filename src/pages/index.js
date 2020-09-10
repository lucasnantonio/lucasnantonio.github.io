import React, { useState } from "react"
import Layout from "../components/layout"
import PostList from "../components/postList"
import HomeSection from "../components/home-section"
import SEO from "../components/seo"
import Hello from "../components/hello"
import About, {LifeEvent} from "../components/about"
import Filters from "../components/filters"
import { minWidth, topics } from "../components/utils"
import Code from "../images/icons/Code.svg"
import SkillSection from "../components/SkillSection"
import { motion, AnimatePresence } from "framer-motion"

import { ic_petal_logo, ic_nu_logo, ic_others } from "../components/icons.js"

function IndexPage({
  data: {
    allMarkdownRemark: { edges: posts },
    allImageSharp: { nodes: images },
  },
}) {
  const [isAll, setAll] = useState(true)
  const [selectedTopics, setSelectedTopics] = useState(topics)

  const publishedPosts = posts.filter(
    item => item.node.frontmatter.soon === null
  )

  const getFilteredPosts = () => {
    if (isAll) {
      return posts
    } else {
      return posts.filter(item =>
        item.node.frontmatter.topics.some(topic =>
          selectedTopics.includes(topic)
        )
      )
    }
  }
  console.log(Code)
  return (
    <Layout
      isIndex
      isAll={isAll}
      setAll={setAll}
      selectedTopics={selectedTopics}
      setSelectedTopics={setSelectedTopics}
    >
      <SEO title="Home" />
      <div>
        <div className="w-100 flex center  " style={{ maxWidth: minWidth }}>
          <Hello setSelectedTopics={setSelectedTopics} setAll={setAll} />
        </div>
      </div>
      <div style={{ maxWidth: minWidth }} className="db-l dn mr4 center  ">
        <Filters
          selectedTopics={selectedTopics}
          setSelectedTopics={setSelectedTopics}
          isAll={isAll}
          setAll={setAll}
          posts={posts}
          publishedPosts={publishedPosts}
        />
        {!isAll && <SkillSection skill={selectedTopics[0]}></SkillSection>}
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="work">
        <AnimatePresence>
          {isAll ? (
            <motion.div
              transition={{ duration: 0.25 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{
                y: -30,
                opacity: 0,
                height: 0,
                overflow: "hidden",
                position: "absolute",
              }}
              style={{ maxWidth: minWidth }}
              className="center  "
            >
              <HomeSection
                isAll={isAll}
                posts={getFilteredPosts()}
                icon={ic_petal_logo}
                title="Petal"
                date="2019"
                place="New York"
                description="On a mission to build credit that is honest, simple, and accessible."
              />
              <HomeSection
                isAll={isAll}
                posts={getFilteredPosts()}
                icon={ic_nu_logo}
                title="Nubank"
                date="2016—2019"
                place="São Paulo"
                description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
              />
              <HomeSection
                isAll={isAll}
                posts={getFilteredPosts()}
                icon={ic_others}
                title="Others"
                date="2013"
                place="London"
                description=""
              />
            </motion.div>
          ) : (
            <div className="center  " style={{ maxWidth: minWidth }}>
              {" "}
              <PostList posts={getFilteredPosts()} />{" "}
            </div>
          )}
        </AnimatePresence>
        {/* <Writing /> */}
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
