import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"
import Tag from "../components/Tag"
import { minWidth } from "../components/utils"

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
      <div
        style={{
          backgroundColor: frontmatter.color || "#f0f0f0",
          height: "600px",
          padding: "0rem",
        }}
      >
        <Img
          className="h-100"
          fluid={frontmatter.cover_image.childImageSharp.fluid}
          color={frontmatter.color}
          objectFit="contain"
        />
      </div>
      <div
        style={{ maxWidth: "32rem" }}
        className="flex center flex-row-l flex-column justify-between mv5"
      >
        <div className="flex flex-column">
          <h1 className="neue-regular measure f1 black-80 mt0 mb3 pb0 w-100">
            {frontmatter.title}
          </h1>
          <h1 className="f3 fw1 lh-copy black-80 mt0 pt0 measure mb1">
            {frontmatter.subtitle}
          </h1>
        </div>
        {/* <div className="flex flex-row-l flex-column justify-between mb0-l mb4 w-third">
          <div className="mono f7 black-30 lh-copy measure pt2 w-100">
            <div className="nowrap">
              {" "}
              {frontmatter.where && frontmatter.where + `,`} {frontmatter.date}{" "}
            </div>
            {frontmatter.team && frontmatter.team.map(item => `${item}, `)}
          </div>
        </div> */}
      </div>

      {/* PROBLEM, SOLUTION, IMPACT */}
      {frontmatter.solution && frontmatter.problem && frontmatter.impact && (
        <div
          style={{ maxWidth: "32rem" }}
          className="flex center justify-between bb bt bw1 b--black-80 mb4 pv4 mt3"
        >
          <div className="mr4 w-100">
            <h4>Problem</h4>
            <p className="lh-copy">{frontmatter.problem}</p>
          </div>
          <div className="mr4 w-100">
            <h4>Solution</h4>
            <p className="lh-copy">{frontmatter.solution}</p>
          </div>
          <div className=" w-100">
            <h4>Result</h4>
            <p className="lh-copy">{frontmatter.impact}</p>
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
