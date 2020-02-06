import React, { useState, useEffect, isValidElement } from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Hello from "../components/hello"
import Filters from "../components/filters"
import PostList from "../components/postList"

// Components
import { Link, graphql } from "gatsby"

// const [isAll, setAll] = useState(true)

// const [selectedTopics, setSelectedTopics] = useState(topics)

const Topics = ({ pageContext, data }) => {
  const { topic } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const topicHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } topicged with "${topic}"`
  return (
    <Layout
      isIndex
      // isAll={isAll}
      // setAll={setAll}
      // selectedTopics={selectedTopics}
      // setSelectedTopics={setSelectedTopics}
    >
      <Hello />
      {/* <Filters
      // selectedTopics={selectedTopics}
      // setSelectedTopics={setSelectedTopics}
      // isAll={isAll}
      // setAll={setAll}
      // posts={posts}
      /> */}
    </Layout>
  )
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
