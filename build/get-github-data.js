const { GraphQLClient } = require('graphql-request')

var fs = require('fs');
const { promisify } = require("util")

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
                  }
                }
              }
            }
          }
    }`
    
    const data = await graphQLClient.request(query)
    const jsonData = JSON.stringify(data, undefined, 2)
    await promisify(fs.writeFile)('./generated/github-starred-repos.json', jsonData, 'utf8')
}


main().catch(error => console.error(error))

