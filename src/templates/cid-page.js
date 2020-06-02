import React from "react"
import Layout from "../components/layout"
import BlogListCid from "../components/blog-list-cid"
import SEO from "../components/seo"

const CidPage = () => {
	return (
      <Layout banner="cidBanner">
        <SEO/>
        <p>This is cid page.</p>
        <BlogListCid/>
      </Layout>
	)
}

export default CidPage
