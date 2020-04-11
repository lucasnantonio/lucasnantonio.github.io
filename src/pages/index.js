import React, { useState, useEffect, isValidElement } from "react"
import Layout from "../components/layout"
import PostList from "../components/postList"
import { CSSTransition } from "react-transition-group"
import HomeSection from "../components/home-section"
import SEO from "../components/seo"
import Hello from "../components/hello"
import Filters from "../components/filters"
import Writing from "../components/writing"
import { StaticQuery } from "gatsby"
import { minWidth, topics, sizes } from "../components/utils"
import { motion, AnimatePresence } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "../components/utils"
import { ic_petal_logo, ic_nu_logo, ic_others } from "../components/icons.js"
import Img from "gatsby-image/withIEPolyfill"

function IndexPage({
  data: {
    allMarkdownRemark: { edges: posts },
    allImageSharp: { nodes: images },
  },
}) {
  const [isWorkInView, setWorkInView] = useState(false)
  const [isAll, setAll] = useState(true)
  const [selectedTopics, setSelectedTopics] = useState(topics)

  const checkIfWorkIsInView = () => {
    window.onscroll = () => {
      document.getElementById("work") !== null &&
        setWorkInView(
          document.getElementById("work").getBoundingClientRect().top <= 0
        )
    }
  }
  // const nucontaImage = images.filter((item)=> item.fluid.originalName="nuconta-hero.png")
  const nucontaImage = images.filter((item) => item.fluid.originalName === "nuconta-hero-copy.png")[0].fluid
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

  return (
    <Layout
      isIndex
      isAll={isAll}
      setAll={setAll}
      selectedTopics={selectedTopics}
      setSelectedTopics={setSelectedTopics}
    >
      <SEO title="Home" />
      <div
      // style={{background:"#f9f7f6"}} 
      // className="w-100 pb4 mb5 flex"
      >
        <div className="w-100 flex center  " style={{ maxWidth: minWidth }}>

          <Hello setSelectedTopics={setSelectedTopics} setAll={setAll} />
          {/* <Img objectFit="contain" className="w-70 overflow-x-visible" fluid={nucontaImage}></Img> */}
        </div>
      </div>
      <div
        style={{ maxWidth: minWidth }}
        className="db-ns dn mr4 center  ">
        <Filters
          selectedTopics={selectedTopics}
          setSelectedTopics={setSelectedTopics}
          isAll={isAll}
          setAll={setAll}
          posts={posts}
          publishedPosts={publishedPosts}
        />
      </div>
      {!isAll && (
        <div
          style={{ maxWidth: minWidth }}
          className="mt5 mb6 flex flex-column center  "
        >
          {/* <h1 className="w-100 f3 fw5 tracked-tight mb3">
            {selectedTopics[0]}{" "}
          </h1> */}
          <AnimatePresence>
            <motion.p
              transition={{ duration: .25 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0, height: 0, overflow: "hidden", position: "absolute" }} key={selectedTopics[0]} className="f3 fw5 w-100 lh-copy black-40 tracked-tight measure">
              {selectedTopics[0] === "Research"
                ? "A lot of my time is invested in listening to users, advocating for their needs, collaborating with researchers, and creating the necessary workflows so that the team understands who they're designing for."
                : selectedTopics[0] === "Product Design"
                  ? "Understand the user, frame the problem, ideate, prototype, test, deliver, measure, repeat. I have designed products that have reached millions of people, across the disciplines of service, industrial, and digital design."
                  : selectedTopics[0] === "Design Ops"
                    ? "Designing design. Helping things scale at a healthy pace. Keeping the teams I work with happy, engaged and empowered."
                    : "I'm a coding begginer and enthusiast. This portfolio website is in itself an experiment in learning React. Here are some other things I've played with:"}
            </motion.p>
          </AnimatePresence>
        </div>
      )}

      <div id="work">
        {isAll ? (
          <div style={{ maxWidth: minWidth }} className="center  ">
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
          </div>
        ) : (
            <div className="center  " style={{ maxWidth: minWidth }}>
              <PostList posts={getFilteredPosts()} />
            </div>
          )}
        {/* <Writing /> */}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
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
