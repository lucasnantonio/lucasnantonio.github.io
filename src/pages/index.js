import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/postList'
import HomeSection from '../components/home-section'
import SEO from '../components/seo'

const IndexPage = ({ data: { allMarkdownRemark: { edges: posts } } }) => (
  <Layout>
    <SEO title="Home" />
    <div className="vh-75">
      <h1 className={'w-50-l pt4 pr4 f3 mb6 lh-copy black-80'}><span className={'b'} >Lucas Neumann </span>  <span className="i">(product designer),</span> has been ① helping some of the fastest-growing startups in the world ② build a culture of customer understanding, ③ design products that empower their users, and ④ grow healthy, happy design teams.<br></br><br></br> Available for freelance work and coffee in New York.⑤</h1>
    </div>
    <HomeSection
      posts={posts}
      title="Petal"
      date="2019"
      place="New York"
      description="In June 2019, I moved to New York to help Petal amplify the access to credit in America by using good design and intelligent underwriting."
    />
    <HomeSection
      posts={posts}
      title="Nubank"
      date="2016—2019"
      place="São Paulo"
      description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
    />
    <HomeSection
      posts={posts}
      title="Kano"
      date="2013"
      place="London"
      description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
    />
    <HomeSection
      posts={posts}
      title="Personal work"
      date="2013"
      place="London"
      description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
    />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            category
            color
          }
        }
      }
    }
  }
`
