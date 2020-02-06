import React, { useState, useEffect, isValidElement } from "react"
import Layout from "../components/layout"
import PostList from "../components/postList"
import { CSSTransition } from "react-transition-group"
import HomeSection from "../components/home-section"
import SEO from "../components/seo"
import Hello from "../components/hello"
import Filters from "../components/filters"
import { StaticQuery } from "gatsby"
import { minWidth, topics, sizes } from "../components/utils"

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
        {/* <CSSTransition
          in={isAll}
          timeout={200}
          unmountOnExit
          classNames="my-node"
        > */}
        <Hello setSelectedTopics={setSelectedTopics} setAll={setAll} />
        {/* </CSSTransition> */}
        <Filters
          selectedTopics={selectedTopics}
          setSelectedTopics={setSelectedTopics}
          isAll={isAll}
          setAll={setAll}
          posts={posts}
        />
      </div>
      <CSSTransition
        in={!isAll}
        timeout={200}
        unmountOnExit
        classNames={"my-node"}
      >
        <div className="mb5 flex flex-row-l flex-column bt bw1 b--near-white pt4">
          <h1 className="w-100 f2-l f3">
            {selectedTopics[0]}{" "}
            <span className="black-40 f4">{getFilteredPosts().length}</span>
          </h1>
          <p className="f4-l f5 w-100 lh-copy mt4">
            {selectedTopics[0] === "Research"
              ? "I dedicate a lot of my time to listening to users, advocating for their needs, and creating the necessary workflows to ensure the teams I collaborate with understand who they're designing for."
              : selectedTopics[0] === "Product Design"
              ? "Even though my current is heavily centered around UI, I have designed across disciplines with solutions ranging from offline services and experiences to physical and digital products."
              : selectedTopics[0] === "Design Ops"
              ? "I have experience managing teams of designers and working with my peer leads to create and nurture larger design organizations and their culture."
              : "I'm a coding begginer and enthusiast. This portfolio website is, in itself, an experiment in learning React, and below you can find other projects I've played with."}
          </p>
        </div>
      </CSSTransition>

      <div id="work">
        <HomeSection
          isAll={isAll}
          mainImage={
            images.filter(
              item => item.fluid.originalName === "hero-petal.png"
            )[0].fluid
          }
          posts={getFilteredPosts()}
          title="Petal"
          date="2019"
          place="New York"
          description="On a mission to build credit that is honest, simple, and accessible."
        />
        <HomeSection
          isAll={isAll}
          mainImage={
            images.filter(
              item => item.fluid.originalName === "hero-nubank.png"
            )[0].fluid
          }
          posts={getFilteredPosts()}
          title="Nubank"
          date="2016—2019"
          place="São Paulo"
          description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
        />
        <HomeSection
          isAll={isAll}
          mainImage={
            posts[0].node.frontmatter.cover_image.childImageSharp.fluid
          }
          posts={getFilteredPosts()}
          title="Kano"
          date="2013"
          place="London"
          description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
        />
        <HomeSection
          isAll={isAll}
          posts={getFilteredPosts()}
          title="Others"
          date="2013"
          place="London"
          description=""
        />
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
            design_team
            problem
            solution
            impact
            learn_more
            category
            topics
            color
            published
            snapToBottom
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
