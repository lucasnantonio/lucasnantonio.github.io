/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)

const getUniqueTags = notes => {
  return notes.reduce((acc, note) => {
    note.node.frontmatter.tags.forEach(tag => {
      if (acc.indexOf(tag) === -1) {
        acc.push(tag)
      }
      // order tags by the amount of objects in the notes array that contain them in the node.frontmatter.tags array
      acc.sort((a, b) => {
        return (
          notes.filter(n => n.node.frontmatter.tags.indexOf(a) > -1).length -
          notes.filter(n => n.node.frontmatter.tags.indexOf(b) > -1).length
        )
      })
    })
    return acc
  }, [])
}

const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent)
    let collection = parent.sourceInstanceName
    createNodeField({
      node,
      name: "collection",
      value: collection,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const noteTagTemplate = path.resolve(`src/templates/noteTagTemplate.js`)
  const noteTemplate = path.resolve(`src/templates/noteTemplate.js`)
  const blogPostTemplate = path.resolve(`src/templates/postTemplate.js`)

  const postPages = graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { published: { eq: true }, soon: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              subtitle
              cover
              color
              cover_image {
                publicURL
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges
    return posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        }, // additional data can be passed via context
      })
    })
  })

  const notePages = graphql(`
    query {
      allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "notes" } }
          frontmatter: { title: { ne: "" } }
        }
      ) {
        totalCount
        edges {
          node {
            fields {
              collection
            }
            frontmatter {
              title
              source
              tags
            }
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const notes = result.data.allMarkdownRemark.edges
    return notes.forEach((note, index) => {
      createPage({
        path: `notes/note/${note.node.frontmatter.title}`,
        component: noteTemplate,
        context: {
          note: note,
          notes: notes,
          title: note.node.frontmatter.title,
        }, // additional data can be passed via context
      })
    })
  })

  const tagPages = graphql(`
    query {
      allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "notes" } }
          frontmatter: { title: { ne: "" } }
        }
      ) {
        totalCount
        edges {
          node {
            excerpt
            fields {
              collection
            }
            frontmatter {
              title
              source
              tags
            }
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const notes = result.data.allMarkdownRemark.edges
    const tags = getUniqueTags(notes)
    return tags.forEach((tag, index) => {
      createPage({
        path: `/notes/${tag}`,
        component: noteTagTemplate,
        context: { tag: tag, notes: notes }, // additional data can be passed via context
      })
    })
  })
  return Promise.all([postPages, tagPages, notePages])
}
