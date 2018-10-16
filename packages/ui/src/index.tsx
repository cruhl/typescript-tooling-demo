import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";

import * as React from "react";
import * as ReactDom from "react-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const QUERY = gql`
  {
    hello
  }
`;

const App = () => (
  <h1>
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return data.hello;
      }}
    </Query>
  </h1>
);

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
