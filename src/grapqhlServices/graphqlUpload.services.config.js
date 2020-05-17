import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
const { createUploadLink } = require('apollo-upload-client')

const link = createUploadLink({ uri: 'http://localhost:4000/graphql' })

const Client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default Client
