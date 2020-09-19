import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query ProductionQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
        clients {
          logo {
            publicURL
          }
          url
        }
      }
    }
  }
`

const ProductionPage = ({data}) => {
  const clientSection = data.markdownRemark.frontmatter.clients.map(
    client => {
      return <a href={client.url} target='_blank' rel="noreferrer"><img alt="" src={client.logo.publicURL}/></a>
    }
  )
	return (
      <Layout banner="productionBanner">
        <SEO/>
        <h1 className='crux'>PRODUCTION</h1>
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        {/* <BlogListProduction/> */}
        <div className="clientLogos">
          {clientSection}
        </div>
      </Layout>
	)
}

export default ProductionPage
