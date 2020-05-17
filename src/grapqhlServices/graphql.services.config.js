import ApolloClient, { InMemoryCache } from 'apollo-boost'
const { createUploadLink } = require('apollo-upload-client')

const Client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  link: createUploadLink(),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
})

if (localStorage.getItem('token') !== undefined) {
  Client.headers = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }
}

export default Client
