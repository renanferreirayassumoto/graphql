import * as apolloserver from 'apollo-server';

const db = [
	{
		id: 1,
		nome: 'Renan',
		email: 'renankosmo@gmail.com',
		telefone: '67 9999 9999',
		perfil: 1,
	},
	{
		id: 2,
		nome: 'Nicolas',
		email: 'nicolas@gmail.com',
		telefone: '67 8888 9999',
		perfil: 2,
	},
];

const perfis = [
	{ id: 1, descricao: 'ADMIN' },
	{ id: 2, descricao: 'NORMAL' },
];

const typeDefs = apolloserver.gql`

    type Usuario {
		id: Int
		nome: String
		email: String
		telefone: String
		perfil: Perfil
	}

	type Perfil {
		id: Int
		descricao: String
	}

    type Query {
		usuario(id: Int): Usuario
		perfis: [Perfil]
    }
`;

const resolvers = {
	Usuario: {
		perfil(usuario) {
			return perfis.find((perfil) => perfil.id == usuario.perfil);
		},
	},
	Query: {
		usuario(_, args) {
			return db.find((db) => db.id == args.id);
		},
		perfis() {
			return perfis;
		},
	},
};

const server = new apolloserver.ApolloServer({
	typeDefs,
	resolvers,
});

server.listen();
