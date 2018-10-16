import gql from "graphql-tag";
import { GraphQLServer } from "graphql-yoga";

const typeDefs = gql`
  type Query {
    hello(name: String): String!
  }
`;

const resolvers: any = {
  Query: {
    hello: (_source: undefined, args: { name: string }) =>
      `Hello, ${args.name || "World"}!`
  }
};

new GraphQLServer({ typeDefs, resolvers }).start(() =>
  console.log("Server is running on http://localhost:4000")
);
