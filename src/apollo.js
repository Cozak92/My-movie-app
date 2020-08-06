import ApolloClient from "apollo-boost"

const client = new ApolloClient({
    uri: "https://movie-ql-eight.vercel.app"
});

export default client;