import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { next, prev } = pageContext
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const caret = (
    <div className="pa2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19"
          fill="#949494"
        />
      </svg>
    </div>
  )
  return (
    <Layout isIndex={false}>
      <div className="flex justify-between items-center mb5">
        <div>
          <h1 className="neue-regular f4 black mt3 mb2 pb0 w-100">
            {frontmatter.title}
          </h1>
          <h1 className="f4 black-40 mt0 pt0 measure-narrow  fw4">
            {frontmatter.subtitle}
          </h1>
        </div>
        <div className="flex">
          {next && (
            <Link to={next.frontmatter.path}>
              <button className="br-pill hover-bg-near-white bn pointer center items-center gray hover-dark-gray ">
                {caret}
              </button>
            </Link>
          )}
          {prev && (
            <Link to={prev.frontmatter.path}>
              <button className="br-pill hover-bg-near-white bn pointer center items-center gray hover-dark-gray ">
                {caret}
              </button>
            </Link>
          )}
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
