import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"
import { minWidth } from "../components/utils"
import PreviousAndNext from "../components/previousAndNext"
import PostMetadata from "../components/postMetadata"
import Learnings from "../components/learnings"
import PostSummary from "../components/postSummary"
import { AnimatePresence, motion } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "../components/utils"
import ImageWithBackground from "../components/imageWithBackground"

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
    <motion.div
      layoutId={`${frontmatter.title}+posttitle`}
      className="flex flex-column pb5-l w-100"
    >
      <h1 className=" fw5 f1 black-80 mt0 mb1 pb0 w-100 tracked-tight lh-copy">
        {frontmatter.title}
      </h1>
      <div className="fw5 measure w-60-l flex flex-row-l flex-column items-start f3 lh-copy mt0 pt0 measure mb1 black-40 tracked-tight">
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
      <div style={{ marginTop: "-6rem" }}>{heroImage}</div>
      {/* <AnimatePresence> */}
      <motion.div
        key={frontmatter.title}
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        exit={{ opacity: 0, display: "none" }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div
          style={{ maxWidth: minWidth }}
          className="flex w-100 justify-between flex-row-l flex-column center pt5"
        >
          {title}
          <PostMetadata frontmatter={frontmatter} />
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
