import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"
import { minWidth } from "../components/utils"
import PreviousAndNext from "../components/previousAndNext"
import PostMetadata from "../components/postMetadata"
import Learnings from "../components/learnings"
import PostSummary from "../components/postSummary"
import { motion } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "../components/utils"

export default function Template({
  location,
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { next, prev } = pageContext
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase()
    })
  }

  const title = (
    <div className="flex flex-column pb5-l w-100">
      <h1 className=" fw5 f3 black-80 mt0 mb1 pb0 w-100 tracked-tight lh-copy">
        {frontmatter.title}
      </h1>
      <div className="fw5 measure w-60-l flex flex-row-l flex-column items-start f3 lh-copy mt0 pt0 measure mb1 black-40 tracked-tight">
        {frontmatter.subtitle}
      </div>
    </div>
  )

  const heroImage = (
    <div
      className="center flex flex-column justify-end br2"
      style={{
        backgroundColor: frontmatter.color || "#f0f0f0",
        maxHeight: "500px",
        overflow: "hidden",
        padding: "0rem",
        maxWidth: minWidth,
      }}
    >
      <Img
        className=""
        fluid={frontmatter.cover_image.childImageSharp.fluid}
        color={frontmatter.color}
        objectFit="contain"
      />
    </div>
  )

  const content = (
    <div className="pt4 flex flex-row-l flex-column w-100">
      <div style={{ maxWidth: minWidth }} className="post-content center w-100">
        <div className="lh-copy" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )

  return (
    <Layout location={location} prev={prev} next={next} isIndex={false}>
      <motion.div
        transition={{ duration: 0.5 }}
        initial={initialFadeAnimation}
        animate={fadeInAnimation}
      >
        <div
          style={{ maxWidth: minWidth }}
          className="flex w-100 justify-between flex-row-l flex-column center bt bw1 b--black-10 pt5"
        >
          {title}
          <PostMetadata frontmatter={frontmatter} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {heroImage}
      </motion.div>
      <PostSummary frontmatter={frontmatter} />
      {content}
      {frontmatter.learnings && <Learnings list={frontmatter.learnings} />}
      <PreviousAndNext prev={prev} next={next}></PreviousAndNext>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        topics
        subtitle
        problem
        solution
        impact
        color
        where
        learn_more
        learnings
        team
        myrole
        link
        link_label
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
`
