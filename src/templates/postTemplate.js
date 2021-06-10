import { motion, AnimateSharedLayout } from "framer-motion"
import { graphql } from "gatsby"
import React from "react"
import ImageWithBackground from "../components/imageWithBackground"
import Layout from "../components/layout"
import Learnings from "../components/learnings"
import PostSummary from "../components/postSummary"
import PreviousAndNext from "../components/previousAndNext"
import PostMetadata from "../components/postMetadata"
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
    <motion.div className="flex flex-row-l flex-column justify-between items-start w-100 mt4">
      <div className="w-50-l">
        <p className={`f3 measure-narrow mt1 mb2`}>{frontmatter.title} </p>
        <PostMetadata frontmatter={frontmatter}></PostMetadata>
      </div>

      <p className={"w-50-l f3 black-50 lh-copy pv0 mb0-l mb4 mt0"}>
        {frontmatter.subtitle}
      </p>
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
        // key={frontmatter.title}
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        exit={{ opacity: 0, display: "none" }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div
          style={{ maxWidth: minWidth }}
          className="pt5 flex w-100 justify-between flex-row center bb b--near-white"
        >
          <AnimateSharedLayout>{title}</AnimateSharedLayout>
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
