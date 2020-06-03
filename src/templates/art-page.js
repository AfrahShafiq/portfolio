import React from "react"
import Layout from "../components/layout"
import BlogListArt from "../components/blog-list-art"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query ArtQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`

const ArtPage = ({data}) => {
	return (
      <Layout banner="artBanner">
        <SEO/>
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <BlogListArt/>
      </Layout>
	)
}

export default ArtPage
