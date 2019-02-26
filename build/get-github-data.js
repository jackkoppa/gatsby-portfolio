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
    
    const query = `{
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
    }`
    
    const data = await graphQLClient.request(query)
    const jsonData = JSON.stringify(data.repositoryOwner.pinnedRepositories.edges, undefined, 2)

    if (!fs.existsSync(generatedDirectory)) {
      fs.mkdirSync(generatedDirectory)
    }
    
    await promisify(fs.writeFile)('./generated/github-pinned-repos.json', jsonData, 'utf8')
}


main().catch(error => console.error(error))

