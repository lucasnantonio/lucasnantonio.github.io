import React, { useState, useEffect, isValidElement } from "react"
import Layout from "../components/layout"
import PostList from "../components/postList"
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
  const [selectedSizes, setSelectedSizes] = useState([])

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
      <Hello />
      {/* <Filters
        isAll={isAll}
        setAll={setAll}
        selectedTopics={selectedTopics}
        selectedSizes={selectedSizes}
        setSelectedTopics={setSelectedTopics}
        setSelectedSizes={setSelectedSizes}
      /> */}
      <div id="work">
        {console.log(getFilteredPosts())}
        <HomeSection
          mainImage={
            images.filter(
              item => item.fluid.originalName === "hero-petal.png"
            )[0].fluid
          }
          posts={getFilteredPosts()}
          title="Petal"
          date="2019"
          place="New York"
          description="In June 2019, I moved to New York to help Petal amplify the access to credit in America by using good design and intelligent underwriting."
        />
        <HomeSection
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
          mainImage={
            posts[0].node.frontmatter.cover_image.childImageSharp.fluid
          }
          posts={getFilteredPosts()}
          title="Personal work"
          date="2013"
          place="London"
          description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
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
