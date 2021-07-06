import { motion } from "framer-motion"
import React from "react"
import HomeSection from "../components/home-section"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { minWidth } from "../components/utils"
import { graphql } from "gatsby"
import { Headline } from "../components/headline"

function IndexPage({
  data: {
    allMarkdownRemark: { edges: posts },
  },
  location,
}) {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div style={{ maxWidth: minWidth }} className="ph0-l layout-grid center">
        <Headline></Headline>
        <HomeSection posts={posts} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
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
