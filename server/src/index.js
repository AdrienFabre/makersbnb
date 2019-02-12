import { GraphQLServer } from 'graphql-yoga'

const typeDefs = ` 
  type Query {
    hello: String!
  }
`

const URI = "mongodb+srv://admin:<PASSWORD>@cluster0-shd31.mongodb.net/test?retryWrites=true"

const resolver = {
  Query: {
    hello: "String"
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('server is
