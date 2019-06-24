import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { RepoList } from './repoList'

const Work = () => (
  <StaticQuery
    query={graphql`
        query WorkQuery {
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
                    repositories(first: 20, orderBy: { field: UPDATED_AT, direction: DESC } ) {
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
        <RepoList 
            pinnedRepositories={data.github.repositoryOwner.pinnedRepositories.edges}
            allRepositories={data.github.repositoryOwner.repositories.edges}
        />
    )}
/>
)

export default Work
