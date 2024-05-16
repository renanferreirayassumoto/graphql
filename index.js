import * as apolloserver from 'apollo-server';

const produtos = [
	{
		id: 1,
		nome: 'Notebook',
		valor: 3400.99,
	},
	{
		id: 2,
		nome: 'Celular',
		valor: 2400.0,
	},
];

const usuarios = [
	{
		id: 1,
		nome: 'Renan',
		salario: 13500,
		ativo: true,
		idade: 19,
	},
	{
		id: 2,
		nome: 'Nicolas',
		salario: 980,
		ativo: false,
		idade: 29,
	},
];

const typeDefs = apolloserver.gql`

    type Produto {
        id: ID
        nome: String
        valor: Float
    }

    type Usuario {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
    }
`;

const resolvers = {
	Query: {
		usuarios() {
			return usuarios;
		},
		produtos() {
			return produtos;
		},
	},
};

const server = new apolloserver.ApolloServer({
	typeDefs,
	resolvers,
});

server.listen();
