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
import "../../node_modules/tachyons/css/tachyons.min.css"
import "../MyFontsWebfontsKit.css"
import "./layout.css"
import Utils from "./utils"

const { minWidth } = Utils

const Layout = ({
  children,
  isWorkInView,
  selectedSizes,
  selectedTopics,
  setSelectedTopics,
  setSelectedSizes,
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
      <Header
        isWorkInView={isWorkInView}
        siteTitle={data.site.siteMetadata.title}
        selectedTopics={selectedTopics}
        selectedSizes={selectedSizes}
        setSelectedTopics={setSelectedTopics}
        setSelectedSizes={setSelectedSizes}
      />

      <div
        style={{
          margin: `0 auto`,
          // padding: `0rem 3rem 3rem 3rem`,
          paddingTop: 0,
          maxWidth: minWidth,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
