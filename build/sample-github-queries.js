const getIndividualRepoReadme = `
repository(name: "cityaq", owner: "jackkoppa") {
    object(expression: "master:README.md") {
        ... on Blob {
            text
        }
    }
}
`

const getAllPinnedRepos = `
repositoryOwner(login: "jackkoppa") {
    ... on User {
        pinnedRepositories(first: 6) {
            edges {
                node {
                    name
                    id
                    url
                }
            }
        }
    }
}
`

const getPinnedReposWithReadmes = `
repositoryOwner(login: "jackkoppa") {
     ... on User {
         pinnedRepositories(first: 6) {
             edges {
                 node {
                    name
                    id
                    url
                    object(expression: "master:README.md") {
                        ... on Blob {
                            text
                        }
                    }
                }
            }
        }
    }
}
`