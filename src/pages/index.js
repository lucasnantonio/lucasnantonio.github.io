import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/postList'
import HomeSection from '../components/home-section'
import SEO from '../components/seo'
import FootnoteIcon from '../components/footnoteIcon'

const circledNumberStyle = {
  padding: '0em 0.6em .3em',
  borderRadius: '100%',
  fontSize: '.5em',
  border: '1px solid rgba(0,0,0,.1)',
  fontWeight: '400',
  verticalAlign: '.7rem'
}

const IndexPage = ({ data: { allMarkdownRemark: { edges: posts }, allImageSharp: { nodes: images } } }) => (

  <Layout>
    <SEO title="Home" />
    <div className="vh-75">
      <h1 className={'w-50-l pt4 pr4-l f3 mb6 lh-copy black-50'}><span className={'b black'} >Lucas Neumann <span style={{ verticalAlign: '-.1em' }}> • </span></span>  <span className=""> product designer,</span> has been helping some of the fastest-growing startups in the world <FootnoteIcon number='1'/> build cultures of customer understanding,<FootnoteIcon number='2'/> design products that empower their users,<FootnoteIcon number='3'/> and grow healthy, happy design teams.<FootnoteIcon number='4'/><br></br><br></br> Available for freelance work and coffee in New York. <FootnoteIcon number='5'/></h1>
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
