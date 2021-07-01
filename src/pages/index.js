import { motion } from "framer-motion"
import React from "react"
import HomeSection from "../components/home-section"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { minWidth } from "../components/utils"
import { graphql } from "gatsby"

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
