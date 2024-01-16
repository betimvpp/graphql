import "reflect-metadata"

import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { UseResolver } from './src/resolvers/UserResolver';

async function main() {
    const schema = await buildSchema({
        resolvers: [
            UseResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });

    const server = new ApolloServer({
        schema
    });

    const { url } = await server.listen();

    console.log(`Server running on ${url}`)
}

main();