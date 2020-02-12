import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"
import Tag from "../components/Tag"

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
      <div className="flex flex-column justify-between mb5">
        <div className="flex justify-between w-100">
          <h1 className="neue-regular measure f2 black mt1 mb0 pb0 w-100">
            {frontmatter.title}
          </h1>
        </div>
        <h1 className="f3 fw1 lh-copy black-40 mt0 pt0 measure mb4">
          {frontmatter.subtitle}
        </h1>
        <div className="flex flex-row-l flex-column justify-between">
          <div className="mono f7 black-20 lh-copy measure">
            {frontmatter.where && frontmatter.where + `,`} {frontmatter.date}
            <br></br>
            {frontmatter.team && frontmatter.team.map(item => `${item}, `)}
          </div>
          {/* <div className="flex">
            {frontmatter.topics &&
              frontmatter.topics.map(item => (
                <Tag title={item.capitalize()}></Tag>
              ))}
          </div> */}
        </div>
      </div>

      <div
        style={{
          backgroundColor: frontmatter.color || "#f0f0f0",
          height: "500px",
        }}
      >
        <Img
          className="h-100"
          fluid={frontmatter.cover_image.childImageSharp.fluid}
          color={frontmatter.color}
          objectFit="contain"
        />
      </div>

      {/* PROBLEM, SOLUTION, IMPACT */}
      {frontmatter.solution && frontmatter.problem && frontmatter.impact && (
        <div className="flex justify-between bb bw1 b--near-white mb4 pb3 mt3">
          <div className="mr3 w-100">
            <h4>Problem</h4>
            <p className="lh-copy">{frontmatter.problem}</p>
          </div>
          <div className="mr3 w-100">
            <h4>Solution</h4>
            <p className="lh-copy">{frontmatter.solution}</p>
          </div>
          <div className="mr3 w-100">
            <h4>Result</h4>
            <p className="lh-copy">{frontmatter.impact}</p>
          </div>
        </div>
      )}
      <div className="pt4 flex flex-row-l flex-column w-100">
        <div className="post-content center w-100">
          <div className="lh-copy" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <div className="mt5 pv4 bt bw1 b--near-white flex">
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
