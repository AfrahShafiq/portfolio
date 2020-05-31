import React from "react"
import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

const ProductionPage = () => {
	return (
      <Layout banner="productionBanner">
        <SEO/>
        <p>This is production page.</p>
        <BlogListHome/>
      </Layout>
	)
}

export default ProductionPage
