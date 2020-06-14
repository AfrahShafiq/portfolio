import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query PressQuery($id: String!){
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
const AboutPage = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

	return (
		<Layout className="page" banner='homeBanner'>
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<div >
				<article className='press' dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	)
}

export default AboutPage