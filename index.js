import * as apolloserver from 'apollo-server';

const db = {
	usuarios: [
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
	],
	perfis: [
		{ id: 1, descricao: 'ADMIN' },
		{ id: 2, descricao: 'NORMAL' },
	],
};

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
		usuarios: [Usuario]
    }
`;

const resolvers = {
	Usuario: {
		perfil(usuario) {
			return db.perfis.find((perfil) => perfil.id == usuario.perfil);
		},
	},
	Query: {
		usuario(_, args) {
			return db.usuarios.find((db) => db.id == args.id);
		},
		perfis() {
			return db.perfis;
		},
		usuarios() {
			return db.usuarios;
		},
	},
};

const server = new apolloserver.ApolloServer({
	typeDefs,
	resolvers,
});

server.listen();
