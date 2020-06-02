import React from "react"
import Layout from "../components/layout"
import BlogListProduction from "../components/blog-list-production"
import SEO from "../components/seo"

const ProductionPage = () => {
	return (
      <Layout banner="productionBanner">
        <SEO/>
        <p>This is production page.</p>
        <BlogListProduction/>
      </Layout>
	)
}

export default ProductionPage
