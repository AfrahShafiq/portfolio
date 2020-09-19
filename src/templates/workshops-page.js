import React from "react"
import Layout from "../components/layout"
import BlogListWorkshop from "../components/blog-list-workshop"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query WorkshopsQuery($id: String!){
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

const WorkshopsPage = ({data}) => {
	return (
      <Layout banner="workshopsBanner">
        <SEO/>
        <h1 className='crux'>TEACHING + WORKSHOPS</h1>
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <BlogListWorkshop/>
      </Layout>
	)
}

export default WorkshopsPage
