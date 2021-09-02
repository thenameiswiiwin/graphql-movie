import { GraphQLServer } from 'graphql-yoga';
import resolvers from '../graphql/resovers';

const server = new GraphQLServer({
	typeDefs: `type Movie {
    id: Int!
    title: String!
    rating: Float
    summary: String
    language: String
    medium_cover_image: String
    genres: [String]
  }

  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
  `,
	resolvers,
});

server.start(() => console.log('Graphql Server Running'));
