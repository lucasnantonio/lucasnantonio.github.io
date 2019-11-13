import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageWithBackground from "../components/imageWithBackground"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="pt4 flex mb5">
        <div>
          <h1 className="neue-regular f1">{frontmatter.title}</h1>
          <h2 className="f2 black-40">{frontmatter.subtitle}</h2>
          <h2>{frontmatter.date}</h2>
        </div>
      </div>
      <div
        style={{ backgroundColor: frontmatter.color }}
        className="pt5 pb4 db"
      >
        <ImageWithBackground
          snapToBottom={false}
          // isHovered={isHovered}
          fluid={frontmatter.cover_image.childImageSharp.fluid}
          color={frontmatter.color}
        />
      </div>
      <div className="pt3 flex flex-row-l flex-column">
        <div className="w-25"></div>
        <div className="w-75 post-content">
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
        color
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
