import * as apolloserver from 'apollo-server';

const typeDefs = apolloserver.gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
`;

const resolvers = {
	Query: {
		idade() {
			return 19;
		},
		salario() {
			return 7488.97;
		},
		nome() {
			return 'Renan Ferreira Yassumoto';
		},
		ativo() {
			return true;
		},
		id() {
			return 777;
		},
	},
};

const server = new apolloserver.ApolloServer({
	typeDefs,
	resolvers,
});

server.listen();
