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
      <div>
        <Hello setSelectedTopics={setSelectedTopics} setAll={setAll} />
        <div className="db-ns dn mr4">
          <Filters
            selectedTopics={selectedTopics}
            setSelectedTopics={setSelectedTopics}
            isAll={isAll}
            setAll={setAll}
            posts={posts}
            publishedPosts={publishedPosts}
          />
        </div>
      </div>
      {!isAll && (
        <div
          style={{ background: "#f7f7f7" }}
          className="mt5 mb4 flex flex-column pv5 ph5 br3 mr4"
        >
          <h1 className="w-100 f3 fw5 tracked-tight mb3">
            {selectedTopics[0]}{" "}
          </h1>
          <p className="f3 w-100 lh-copy black-50 ">
            {selectedTopics[0] === "Research"
              ? "I dedicate a lot of my time to listening to users, advocating for their needs, collaborating with researchers, and creating the necessary workflows to ensure the teams I partner with understand who they're designing for."
              : selectedTopics[0] === "Product Design"I have de
                ? "Understand the user, frame the problem, ideate, prototype, test, deliver, measure, repeat. I have helped design products that have reached millions of people, across the disciplines of service, industrial, and digital design."
                : selectedTopics[0] === "Design Ops"
                  ? "Designing how design gets made and keeping the teams I work with happy, engaged and empowered is one of my most recent areas of interest."
                  : "I'm a coding begginer and enthusiast. This portfolio website is in itself an experiment in learning React. Here are some other things I've played with:"}
          </p>
        </div>
      )}

      <div id="work">
        {isAll ? (
          <>
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
          </>
        ) : (
            <PostList posts={getFilteredPosts()} />
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
