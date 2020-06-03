import React from "react"
import Layout from "../components/layout"
import BlogListFilm from "../components/blog-list-film"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query FilmQuery($id: String!){
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

const FilmPage = ({data}) => {
	return (
      <Layout banner="filmBanner">
        <SEO/>
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <BlogListFilm/>
      </Layout>
	)
}

export default FilmPage
