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

export default function BlogListHome() {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { home: { eq: true } } }
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
                    image {
                      childImageSharp {
                        fluid(maxWidth: 500, maxHeight: 436, quality: 80) {
                          ...GatsbyImageSharpFluid
                          ...GatsbyImageSharpFluidLimitPresentationSize
                        }
                      }
                      publicURL
                    }
                    caption
                    subcaption
                  }
                }
              }
            }
          }
        }`
      }

      render={ data => {
          console.log(data)
          let tempData = data.allMarkdownRemark.edges
          console.log(tempData)
          let tempPosts = []
          tempData.forEach(edge => {
            console.log(edge)
            if(edge.node.frontmatter.featuredImage.length === 1)
              tempPosts.push({
                ...edge.node,
                thumbnail : edge.node.frontmatter.featuredImage[0]
              })
            else 
              {
                edge.node.frontmatter.featuredImage.forEach((thumbnail) =>
                  {
                    tempPosts.push({
                      ...edge.node,
                      thumbnail : thumbnail
                    })
                  }
                )
              }
          })
          console.log(tempPosts)
          const posts = tempPosts
            .filter(node => !!  node.frontmatter.date)
            .map(node => 
              {
                  return <PostCard key={node.id} data={node} thumbnail={node.thumbnail} />
              }
          )
          console.log(posts)
          return <PostMaker data={posts} />
        } 
      }
    />
  )
}