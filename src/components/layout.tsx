import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

// https://stackoverflow.com/a/41491220/4167438
function pickTextColor(bgColor, lightColor = '#fff', darkColor = '#000') {
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  return (L > 0.179) ? darkColor : lightColor;
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        github {
          repositoryOwner(login: "jackkoppa") {
              pinnedRepositories(first: 6) {
                  edges {
                      node {
                          name
                          id
                          url
                          description
                          homepageUrl
                          owner {
                              login
                          }
                          languages(first: 6) {
                              edges {
                                  size
                                  node {
                                      color
                                      name
                                  }
                              }
                          }
                      }
                  }
              }
          } 
      }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          {data.github.repositoryOwner.pinnedRepositories.edges.map(repo => {
            return (
              <section className="work-card">
                <div className="work-card__language-wrapper">
                {repo.node.languages.edges.map(language => {
                  return (
                    <span 
                      className="work-card__language" 
                      style={ { 
                        backgroundColor: language.node.color,
                        color: pickTextColor(language.node.color)
                      }}
                    >
                      <span className="work-card__language-text">{language.node.name}</span>
                    </span>
                  )
                  }
                )} 
                </div>
                <h2 className="work-card__header">
                  {(repo.node.owner.login !== 'jackkoppa' 
                    ? `@${repo.node.owner.login}/` 
                    : ''
                  ) + repo.node.name}
                </h2>
                <h4 className="work-card__description">{repo.node.description}</h4>
                <a href={repo.node.url} className="work-card__link">
                  <span>GitHub</span>
                  <i className="fab fa-github"></i>
                </a> 
                {repo.node.homepageUrl
                  ? <a href={repo.node.homepageUrl} className="work-card__link">
                      <span className="work-card__link-text">View Project</span>
                      <i className="far fa-external-link"></i>
                    </a>
                  : null
                }
              </section>
            )
          })}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
