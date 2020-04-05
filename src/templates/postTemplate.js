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
  String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase()
    })
  }
  const title = (
    <div className="flex flex-column pt5 pb5-l w-100">
      <h1 className=" fw5 neue-regular f2 black-80 mt0 mb1 pb0 w-100 tracked-tight">
        {frontmatter.title}
      </h1>
      <div className="fw5 measure w-60-l flex flex-row-l flex-column items-start f2 lh-title mt0 pt0 measure mb1 black-40 tracked-tight">
        {frontmatter.subtitle}
      </div>
    </div>
  )

  const metadata = (
    <div className="fw5 black-30 mv3 pt5-l pt3 pb4 mw5 f7 lh-copy black-50 flex flex-column align-start items-start">
      {frontmatter.link && (
          <a
            href={frontmatter.link}
            target="_blank"
            className=" mb4 link  mt0-l  black pv2 ph3 bg-near-white br-pill f7 flex justify-between-l nowrap hover-bg-black pointer hover-white"
          >
            <span className="mr2 fw5">See it live</span>
            <span className="">›</span>
          </a>
        )}
      <div className="">
        <div className="nowrap">
          {frontmatter.where && frontmatter.where + `,`} {frontmatter.date}{" "}
        </div>
        {/* {frontmatter.team && <div>—</div>} */}

        {frontmatter.team ?
          `Lucas Neumann, ${frontmatter.team.map(
            (item) =>
              ` ${item}`
          )}` : `Solo project`}

      </div>
    </div>
  )

  const heroImage = (
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
  )

  const footer = (
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
          <div className=" lh-title  f6 mb3 ">{prev.frontmatter.subtitle}</div>
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
  )

  const content = (
    <div className="pt4 flex flex-row-l flex-column w-100">
      <div style={{ maxWidth: minWidth }} className="post-content center w-100">
        <div className="lh-copy" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
  const summary = (frontmatter.solution ||
    frontmatter.problem ||
    frontmatter.impact ||
    frontmatter.myrole) && (
      <div
        style={{ maxWidth: minWidth }}
        className=" center flex flex-row-ns flex-column justify-between pv4-ns pv4 br2 tl mt3 "
      >
        <div className="flex flex-row-ns flex-column">
          {frontmatter.problem && (
            <div className="mr4 w-100 mb0-ns mb4 measure">
              
              <h4 className="fw6 f4 mv4-ns mv3 flex center items-center">{ic_problem} <span className="ml2">Problem</span> </h4>
              <p className="lh-copy fw5 black-50">{frontmatter.problem}</p>
            </div>
          )}
          {frontmatter.solution && (
            <div className="mr4 w-100 mb0-ns mb4 measure">
              
              <h4 className="fw6 f4 mv4-ns mv3 flex center items-center">{ic_solution} <span className="ml2">Approach</span></h4>
              <p className="lh-copy fw5 black-50">{frontmatter.solution}</p>
            </div>
          )}
        </div>
        <div className="flex flex-row-ns flex-column">
          {frontmatter.impact && (
            <div className="mr4 w-100 mb0-ns mb4 measure">
              
              <h4 className="fw6 f4 mv4-ns mv3 flex center items-center">{ic_impact} <span className="ml2">Impact</span></h4>
              <p className="lh-copy fw5 black-50">{frontmatter.impact}</p>
            </div>
          )}
          {frontmatter.myrole && (
            <div className=" w-100 mb0-ns mb4 measure">
              <h4 className="fw6 f4 mv4-ns mv3 flex center items-center">{ic_role} <span className="ml2">My role</span></h4>
              <p className="lh-copy fw5 black-50">{frontmatter.myrole}</p>
            </div>
          )}
        </div>
      </div>
    )
  return (
    <Layout prev={prev} next={next} isIndex={false}>
      <motion.div initial={initialFadeAnimation} animate={fadeInAnimation}>
        <div
          style={{ maxWidth: minWidth }}
          className="flex w-100 justify-between flex-row-l flex-column center"
        >
          {title}
          {metadata}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {heroImage}
      </motion.div>

      {summary}
      {content}
      {footer}
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
        team
        myrole
        link
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
