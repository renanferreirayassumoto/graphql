import * as apolloserver from 'apollo-server';

const resolvers = {
	Query: {
		hello() {
			return 'World';
		},
	},
};

const typeDefs = apolloserver.gql`
    type Query {
        hello: String
    }
`;

const server = new apolloserver.ApolloServer({
	typeDefs,
	resolvers,
});

server.listen();
