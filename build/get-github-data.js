const { GraphQLClient } = require('graphql-request')

var fs = require('fs');
const { promisify } = require("util")

const generatedDirectory = './generated'

async function main() {
    const endpoint = 'https://api.github.com/graphql'
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        },
      })
    
    // https://developer.github.com/v4/explorer/
    const repoFragment = `
    edges {
      node {
        name
        id
        url
        primaryLanguage {
          id
          name
        }
      }
    }
    `

    const query = `{
      repositoryOwner(login: "jackkoppa") {
        ... on User {
          pinnedRepositories(first: 6) {
            edges {
              node {
                name
                id
                url
                primaryLanguage {
                  id
                  name
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
                primaryLanguage {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }`
    
    const data = await graphQLClient.request(query)
    const jsonData = JSON.stringify(data.repositoryOwner.pinnedRepositories.edges, undefined, 2)
    /** @TODO Put non-pinned repos into JSON also */

    if (!fs.existsSync(generatedDirectory)) {
      fs.mkdirSync(generatedDirectory)
    }
    
    await promisify(fs.writeFile)('./generated/github-pinned-repos.json', jsonData, 'utf8')
}

main()
