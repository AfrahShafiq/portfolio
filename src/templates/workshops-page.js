import React from "react"
import Layout from "../components/layout"
import BlogListWorkshop from "../components/blog-list-workshop"
import SEO from "../components/seo"

const WorkshopsPage = () => {
	return (
      <Layout banner="workshopsBanner">
        <SEO/>
        <p>This is teachings & Workshops page.</p>
        <BlogListWorkshop/>
      </Layout>
	)
}

export default WorkshopsPage
