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
      <h1 className="neue-regular f4 black mt3 mb2 pb0 w-100">
        {frontmatter.title}
      </h1>
      <h1 className="f4 black-40 mt0 pt0 measure-narrow mb5 fw4">
        {frontmatter.subtitle}
      </h1>

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
        <div className="flex justify-between bt bb bw1 b--near-white mb4 pv3 mt5">
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
        {/* <div className="flex flex-column">
          <div className="flex flex-column mb3 lh-copy f7">
            <span className="black">Where</span>
            <span>São Paulo</span>
          </div>
          <div className="flex flex-column mb3 lh-copy f7">
            <span className="black">When</span>
            <span>2017-2018</span>
          </div>
          <div className="flex flex-column mb3 lh-copy f7">
            <span className="black nowrap">Design team</span>
            {frontmatter.design_team &&
              frontmatter.design_team.map(item => (
                <span key={item} className="nowrap">
                  {item}
                </span>
              ))}
          </div>
          <div className="flex flex-column mb3 lh-copy f7">
            <span>Learn more</span>
            <a
              className="link black"
              target="blank"
              href={frontmatter.learn_more}
            >
              Website
            </a>
          </div>
        </div> */}
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
        learn_more
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
