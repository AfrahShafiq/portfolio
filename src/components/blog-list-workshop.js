import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

const PostMaker = ({ data }) => (
  <section className="posts">
    <div className="grids col-1 sm-2 lg-4">
      {data}
    </div>
  </section>
)

export default function BlogListWorkshop() {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { category: { eq: "workshop" } } }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  slug
                  title
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 500, maxHeight: 436, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                    publicURL
                  }
                }
              }
            }
          }
        }`
      }

      render={ data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge =>
              <PostCard key={edge.node.id} data={edge.node} />
          )
          return <PostMaker data={posts} />
        } 
      }
    />
  )
}