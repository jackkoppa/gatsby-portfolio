import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const InspirationPage = ({ data }) => (
  <Layout>
    <SEO title="Inspiration" keywords={[`images`, `samples`, `layout`]} />
    <h1>Inpiration Page</h1>
    {data.allImageSharp.edges.map(image => {
        return <Img fluid={image.node.fluid}/>
    })}
  </Layout>
)

export const query = graphql`
query InspirationPageQuery {
    allImageSharp(filter: { original: { src: { regex:"/inspiration/"}} }) {
        edges {
            node {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
}
`

export default InspirationPage
