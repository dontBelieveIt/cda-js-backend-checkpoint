import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";

import dataSource from "./config/db";
import PaysResolver from "./resolvers/PaysResolvers";

const port = 3000;

const start = async ()=> {
    await dataSource.initialize(); 
    const schema = await buildSchema({resolvers:[PaysResolver]})
    const server = new ApolloServer({ schema })
    const { url } = await startStandaloneServer(server, {
        listen: { port : port },
    })
    console.log(`🚀  Server ready at: ${url}`)
}
start();

