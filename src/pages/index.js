import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import PostList from '../components/postList'
import HomeSection from '../components/home-section'
import SEO from '../components/seo'
import Hello from '../components/hello'
import Header from '../components/header'
import TagList from '../components/tagList'
import Img from 'gatsby-image'

const IndexPage = ({ data: { allMarkdownRemark: { edges: posts }, allImageSharp: { nodes: images } } }) => {
  const [currentSection, setCurrentSection] = useState('Lucas Neumann')
  const sections = [
    {
      title: 'Petal',
      date: '2019',
      place: 'New York',
      description: 'In June 2019, I moved to New York to help Petal amplify the access to credit in America by using good design and intelligent underwriting.',
      posts: { posts },
      scrollPosition: null },
    {
      title: 'Nubank',
      date: '2019',
      place: 'New York',
      description: 'During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers.',
      scrollPosition: null,
      posts: { posts } },
    {
      title: 'Kano',
      date: '2019',
      place: 'New York',
      description: 'During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers.',
      scrollPosition: null,
      posts: { posts } }

  ]

  let sectionPositions

  window.onscroll = () => {
    sectionPositions = Array.from(document.querySelectorAll('.home-section'))
      .filter((item) => { return item.getBoundingClientRect().top <= 180 && item.getBoundingClientRect().bottom > 0 })
    setCurrentSection(sectionPositions[0] ? sectionPositions[0].id : 'Lucas Neumann')
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection}></Header>
      <Hello/>
      {currentSection !== 'Lucas Neumann' &&
      <TagList />
      }
      <div className='w-100 flex flex-row-l flex-column mt6'>
        <div className="w-third-l">
          <div className="">
          </div>
        </div>
        <div className="w-two-thirds-l">
          <div className='vh-75 overflow-hidden'>
            <Img className="w-100" fluid={images.filter((item) => item.fluid.originalName ===
           'lucas.jpg')[0].fluid}></Img>
          </div>
          <div className="home-section" id="Work">
            {sections.map((item) => {
              return (
                <HomeSection
                  key={item.title}
                  posts={posts}
                  title={item.title}
                  date={item.date}
                  place={item.place}
                  description={item.description}
                />
              )
            })}
          </div>
        </div>
      </div>
)
    </Layout>
  )
}

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
                fluid(maxWidth: 1700) {
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
