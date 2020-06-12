import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PostCard from "./post-card"

const PostMaker = ({ data }) => (
  <section className="posts">
    <div className="grids col-1 sm-2 lg-4">
      {data}
    </div>
  </section>
)

export default function ClientListProduction() {
  return (
    // <StaticQuery 
    //   query={graphql`
    //     query {
    //       allMarkdownRemark(
    //         sort: { order: DESC, fields: [frontmatter___date] }
    //         filter: { frontmatter: { category: { eq: "production" } } }
    //       ) {
    //         edges {
    //           node {
    //             id
    //             excerpt(pruneLength: 250)
    //             frontmatter {
    //               date(formatString: "MMMM DD, YYYY")
    //               slug
    //               title
    //               featuredImage {
    //                 image {
    //                   childImageSharp {
    //                     fluid(maxWidth: 500, maxHeight: 436, quality: 80) {
    //                       ...GatsbyImageSharpFluid
    //                       ...GatsbyImageSharpFluidLimitPresentationSize
    //                     }
    //                   }
    //                   publicURL
    //                 }
    //                 caption
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }`
    //   }

    //   render={ data => {
    //       const posts = data.allMarkdownRemark.edges
    //         .filter(edge => !!edge.node.frontmatter.date)
    //         .map(edge =>
    //           <PostCard key={edge.node.id} data={edge.node} />
    //       )
    //       return <PostMaker data={posts} />
    //     } 
    //   }
    // />
    <section className="posts">
      <div className="grids col-1 sm-2 lg-4">
        Production Page
      </div>
    </section>
  )
}