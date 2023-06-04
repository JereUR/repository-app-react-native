import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const createApolloClient = () =>
  new ApolloClient({
    link: new HttpLink({ uri: 'http://192.168.0.8:4000/api/repositories' }),
    cache: new InMemoryCache()
  })

export default createApolloClient
