/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../../node_modules/tachyons/css/tachyons.min.css"
import "../MyFontsWebfontsKit.css"
import "./layout.css"
import { minWidth } from "./utils"

const Layout = ({
  children,
  isWorkInView,
  isAll,
  setAll,
  selectedTopics,
  setSelectedTopics,
  isIndex,
  prev,
  next,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      {!isIndex && (
        <Header
          isWorkInView={isWorkInView}
          siteTitle={data.site.siteMetadata.title}
          selectedTopics={selectedTopics}
          setSelectedTopics={setSelectedTopics}
          isAll={isAll}
          setAll={setAll}
          isIndex={isIndex}
          prev={prev}
          next={next}
        />
      )}

      <div
        className="pt0 ph4 "
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          maxWidth: isIndex && minWidth,
        }}
      >
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
