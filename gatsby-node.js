/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/postTemplate.js`)
  const topicTemplate = path.resolve("src/templates/topicTemplate.js")

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              subtitle
            }
          }
        }
      }
      topicsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___topics) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        }, // additional data can be passed via context
      })
    })
    // Make tag pages
    const topics = result.data.topicsGroup.group
    topics.forEach(topic => {
      createPage({
        path: `/topics/${_.kebabCase(topic.fieldValue)}/`,
        component: topicTemplate,
        context: {
          topic: topic.fieldValue,
        },
      })
    })
  })
}
