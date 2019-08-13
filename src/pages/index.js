import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/postList'
import HomeSection from '../components/home-section'
import SEO from '../components/seo'
import Hello from '../components/hello'
import Header from '../components/header'
import Img from 'gatsby-image'

const IndexPage = ({ data: { allMarkdownRemark: { edges: posts }, allImageSharp: { nodes: images } } }) => (

  <Layout>
    <SEO title="Home" />
    <Header></Header>
    <Hello/>
    <div className='w-100 flex'>
      <div className="w-third">
      </div>
      <div className="w-two-thirds">
        {/* <div className='vh-75 bg-black mb5'></div> */}
        <div className='vh-75 overflow-hidden mb5'>
          <Img className="w-100" fluid={images.filter((item) => item.fluid.originalName ===
           'lucas.jpg')[0].fluid}></Img>
        </div>
        <HomeSection
          mainImage={images.filter((item) => item.fluid.originalName === 'hero-petal.png')[0].fluid}
          posts={posts}
          title="Petal"
          date="2019"
          place="New York"
          description="In June 2019, I moved to New York to help Petal amplify the access to credit in America by using good design and intelligent underwriting."
        />
        <HomeSection
          mainImage={images.filter((item) => item.fluid.originalName === 'hero-nubank.png')[0].fluid}
          posts={posts}
          title="Nubank"
          date="2016—2019"
          place="São Paulo"
          description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
        />
        <HomeSection
          mainImage={posts[0].node.frontmatter.cover_image.childImageSharp.fluid}
          posts={posts}
          title="Kano"
          date="2013"
          place="London"
          description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
        />
        <HomeSection
          mainImage={posts[0].node.frontmatter.cover_image.childImageSharp.fluid}
          posts={posts}
          title="Personal work"
          date="2013"
          place="London"
          description="During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."
        />
      </div>
    </div>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
      allImageSharp {
        nodes {
          fluid{
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
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
            published
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
    }
  }
`
