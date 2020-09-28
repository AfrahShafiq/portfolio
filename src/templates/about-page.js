import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import tumblrIcon from '../assets/img/tumblr.png'
import instaIcon from '../assets/img/instagram.png'
import vimeoIcon from '../assets/img/vimeo.png'

export const pageQuery = graphql`
  query AboutQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
				title
				cv
				image {
					childImageSharp {
						fluid(maxWidth: 500, maxHeight: 550, quality: 80) {
							...GatsbyImageSharpFluid
							...GatsbyImageSharpFluidLimitPresentationSize
						}
					}
					publicURL
				}
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
			<div className="about">
				<div className="aboutPhoto">
					<Img 
            fluid={frontmatter.image.childImageSharp.fluid} 
            objectFit="fill"
            objectPosition="50% 50%"
            alt={frontmatter.title + ' - Featured image'}
          />
					<div className='socialIconsDiv'>
						<a href='https://www.instagram.com/loveandotheroutdoorgames/'>
							<img className='socialIcons'
								src={instaIcon}
							/>
						</a>
						<a href='https://loveandotheroutdoorgames.tumblr.com/'>
							<img className='socialIcons'
								src={tumblrIcon}
							/>
						</a>
						<a href='https://vimeo.com/user3821907'>
							<img className='socialIcons'
								src={vimeoIcon}
							/>
						</a>
					</div>
					<p>
						<a target="_blank" rel="noreferrer" href={frontmatter.cv}>cv + bio</a>
					</p>
				</div>
				<div className="aboutContent">
					<article dangerouslySetInnerHTML={{ __html: html }} />
		{/*
					<br/>
					<form className="aboutForm" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
						<input type="hidden" name="form-name" value="contact" />
						<p>
							<label>Name<input type="text" name="name" /></label>   
						</p>
						<p>
							<label>Email<input type="email" name="email" /></label>
						</p>
						<p>
							<label>Subject<input type="text" name="subject" /></label>   
						</p>
						<p>
							<label>Message<textarea name="message"></textarea></label>
						</p>
						<p>
							<button className="button" type="submit">Send Message <span className="icon -right"><RiSendPlane2Line/></span></button>
						</p>
					</form>
		*/}
					<a className='center' href="https://afrahshafiq.typeform.com/to/HG0oirKM" target="_blank" rel="noreferrer"><button className="button">Contact Me</button></a>
				</div>
			</div>
		</Layout>
	)
}

export default AboutPage
