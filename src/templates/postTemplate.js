import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout isIndex={false}>
      <div style={{ backgroundColor: frontmatter.color, height: "500px" }}>
        <Img
          className="h-100"
          fluid={frontmatter.cover_image.childImageSharp.fluid}
          color={frontmatter.color}
          objectFit="contain"
        />
      </div>

      <div className="pt3 flex flex-row-l flex-column w-100">
        {/* METADATA */}
        <div className="flex flex-column mt4 w-20">
          <div className="flex flex-column mb3 lh-copy f7">
            <span>Where</span>
            <span className="black">São Paulo</span>
          </div>
          <div className="flex flex-column mb3 lh-copy f7">
            <span>When</span>
            <span className="black">2017-2018</span>
          </div>
          <div className="flex flex-column mb3 lh-copy f7">
            <span>Design team</span>
            {frontmatter.design_team.map(item => (
              <span key={item} className="black">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-column mb3 lh-copy f7">
            <span>Learn more</span>
            <span className="black">São Paulo</span>
          </div>
        </div>

        <div className="post-content center w-80">
          {/* TITLE */}
          <h1 className="neue-regular f2 black mt4 mb0 pb0">
            {frontmatter.title}
          </h1>
          <h2 className="f2 black-40 mt0 pt0">{frontmatter.subtitle}</h2>

          {/* PROBLEM, SOLUTION, IMPACT */}
          <div className="flex justify-between bt bb bw1 b--near-white mb5 mt5 pv3">
            <div className="mr3 w-100">
              <h3>Problem</h3>
              <p className="lh-copy">{frontmatter.problem}</p>
            </div>
            <div className="mr3 w-100">
              <h3>Solution</h3>
              <p className="lh-copy">{frontmatter.solution}</p>
            </div>
            <div className="mr3 w-100">
              <h3>Result</h3>
              <p className="lh-copy">{frontmatter.impact}</p>
            </div>
          </div>

          {/* ACTUAL CONTENT */}
          <div className="lh-copy" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
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
        subtitle
        problem
        solution
        impact
        color
        design_team
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
