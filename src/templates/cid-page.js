import React from "react"
import Layout from "../components/layout"
import BlogListCid from "../components/blog-list-cid"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query CidQuery($id: String!){
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

const CidPage = ( {data} ) => {
	return (
      <Layout banner="cidBanner">
        <SEO/>
        <h1 className='crux'>COMICS | ILLUSTRATIONS | DESIGN | ANIMATIONS</h1>
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <BlogListCid/>
      </Layout>
	)
}

export default CidPage
