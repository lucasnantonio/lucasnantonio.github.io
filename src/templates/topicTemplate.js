import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
const Topics = ({ pageContext, data }) => {
  const { topic } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const topicHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } topicged with "${topic}"`
  return (
    <div>
      <h1>{topicHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          // const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={""}>
              <Link to={"#"}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/topics">All topics</Link>
    </div>
  )
}
Topics.propTypes = {
  pageContext: PropTypes.shape({
    topic: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Topics
export const pageQuery = graphql`
  query($topic: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { topics: { in: [$topic] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
