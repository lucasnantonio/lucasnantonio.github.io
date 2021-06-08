import { motion } from "framer-motion"
import { graphql } from "gatsby"
import React from "react"
import ImageWithBackground from "../components/imageWithBackground"
import Layout from "../components/layout"
import Learnings from "../components/learnings"
import PostSummary from "../components/postSummary"
import PreviousAndNext from "../components/previousAndNext"
import { minWidth } from "../components/utils"

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
    <motion.div className="flex flex-column pv6-l pv5">
      <h1 className=" fw7 f2 black-80 mt0 mb1 pb0 w-100 tracked-tight lh-title measure-narrow">
        {frontmatter.title}
      </h1>
      <div className=" f2 fw5 flex flex-row-l flex-column items-start lh-title mt0 pt0 mb1 black-40 tracked-tight measure-narrow">
        {frontmatter.subtitle}
      </div>
    </motion.div>
  )

  const heroImage = (
    <ImageWithBackground
      tall
      id={frontmatter.title}
      hover={false}
      image={frontmatter.cover_image.childImageSharp.fluid}
      color={frontmatter.color}
    />
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
      <div style={{ marginTop: "-8rem" }}>{heroImage}</div>

      <motion.div
        className={"ph0-l ph4"}
        key={frontmatter.title}
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        exit={{ opacity: 0, display: "none" }}
        transition={{ duration: 0.55, delay: 0.25 }}
      >
        <div
          style={{ maxWidth: minWidth }}
          className="flex w-100 justify-between flex-row-l flex-column center bb b--near-white"
        >
          {title}
        </div>

        <PostSummary frontmatter={frontmatter} />
        {content}
        {frontmatter.learnings && <Learnings list={frontmatter.learnings} />}
        <PreviousAndNext prev={prev} next={next}></PreviousAndNext>
      </motion.div>
      {/* </AnimatePresence> */}
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
