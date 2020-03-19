import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"
import Tag from "../components/Tag"
import { minWidth } from "../components/utils"
import { motion } from "framer-motion"
import { initialFadeAnimation, fadeInAnimation } from "../components/utils"
import {
  ic_problem,
  ic_solution,
  ic_impact,
  ic_role,
} from "../components/icons.js"

export default function Template({
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

  return (
    <Layout prev={prev} next={next} isIndex={false}>
      <motion.div initial={initialFadeAnimation} animate={fadeInAnimation}>
        <div
          style={{ maxWidth: minWidth }}
          className="flex w-100 justify-between flex-row-l flex-column center"
        >
          {/* TITLE */}
          <div className="flex flex-column pt5 pb5-l w-100">
            <h1 className=" fw5 neue-regular f1 black-80 mt0 mb3 pb0 w-100">
              {frontmatter.title}
            </h1>
            <h1 className="f3 lh-copy black-80 mt0 pt0 measure mb1">
              {frontmatter.subtitle}
            </h1>
          </div>
          {/* METADATA */}
          <div className="mv3 pt5-l pt3 pb4 mw5 mono f7 lh-copy black-50">
            <div className="">
              <div className="nowrap">
                {frontmatter.where && frontmatter.where + `,`}{" "}
                {frontmatter.date}{" "}
              </div>
              {frontmatter.team && <div>—</div>}
              <div className="">
                {frontmatter.team && frontmatter.team.map(item => `${item}, `)}
              </div>
            </div>
          </div>
          {/* END METADATA */}
        </div>
      </motion.div>

      {/* COVER IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          className="center"
          style={{
            backgroundColor: frontmatter.color || "#f0f0f0",
            height: "600px",
            padding: "0rem",
            maxWidth: minWidth,
          }}
        >
          <Img
            className="h-100"
            fluid={frontmatter.cover_image.childImageSharp.fluid}
            color={frontmatter.color}
            objectFit="contain"
          />
        </div>
      </motion.div>
      {/* END COVER IMAGE */}

      {/* PROBLEM, SOLUTION, IMPACT */}
      {(frontmatter.solution ||
        frontmatter.problem ||
        frontmatter.impact ||
        frontmatter.myrole) && (
        <div
          style={{ maxWidth: minWidth }}
          className=" center flex flex-row-ns flex-column justify-between mb4 pa5-ns pa4 bg-near-white br2 tl mt3"
        >
          <div className="flex flex-row-ns flex-column">
            {frontmatter.problem && (
              <div className="mr4 w-100 mb0-ns mb4 measure">
                {ic_problem}
                <h4 className="fw6 f4 mv4-ns mv3">Problem</h4>
                <p className="lh-copy">{frontmatter.problem}</p>
              </div>
            )}
            {frontmatter.solution && (
              <div className="mr4 w-100 mb0-ns mb4 measure">
                {ic_solution}
                <h4 className="fw6 f4 mv4-ns mv3">Approach</h4>
                <p className="lh-copy">{frontmatter.solution}</p>
              </div>
            )}
          </div>
          <div className="flex flex-row-ns flex-column">
            {frontmatter.impact && (
              <div className="mr4 w-100 mb0-ns mb4 measure">
                {ic_impact}
                <h4 className="fw6 f4 mv4-ns mv3">Impact</h4>
                <p className="lh-copy">{frontmatter.impact}</p>
              </div>
            )}
            {frontmatter.myrole && (
              <div className=" w-100 mb0-ns mb4 measure">
                {ic_role}
                <h4 className="fw6 f4 mv4-ns mv3">My role</h4>
                <p className="lh-copy">{frontmatter.myrole}</p>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="pt4 flex flex-row-l flex-column w-100">
        <div
          style={{ maxWidth: minWidth }}
          className="post-content center w-100"
        >
          <div className="lh-copy" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <div
        style={{ maxWidth: minWidth }}
        className="mt5 center pv4 bt bw1 b--near-white flex"
      >
        {prev && (
          <div className="f5 mr4 br bw1 b--near-white w-100 pr4">
            <div className=" lh-title f5 mr4 mb3 ">Previous</div>
            <Link
              to={prev.frontmatter.path}
              className="flex link black underline-hover lh-title b f4-l f5 black mb1 "
            >
              {prev.frontmatter.title}
            </Link>
            <div className=" lh-title  f6 mb3 ">
              {prev.frontmatter.subtitle}
            </div>
          </div>
        )}
        {next && next.frontmatter && (
          <div className="w-100">
            <div className=" lh-title f5 mb3">Next</div>
            <Link
              to={next.frontmatter.path}
              className="link black underline-hover flex w-100 lh-title b f4-l f5 mb1"
            >
              {next.frontmatter.title}
            </Link>
            <div className=" lh-title  f6 mb3">{next.frontmatter.subtitle}</div>
          </div>
        )}
      </div>
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
        design_team
        learn_more
        team
        myrole
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
