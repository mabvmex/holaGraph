import express from "express";
// import compression from "compression";
// import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema/index";
import { createServer } from "http";
import expressPlayground from 'graphql-playground-middleware-express';

const app = express()
const server = new ApolloServer({
  schema,
  introspection: true,
});

server.applyMiddleware({app})
app.use('/', expressPlayground({
  endpoint: '/graphql'
}));
// app.use("*", cors());
// app.use(compression());
const httpServer = createServer(app)
const PORT = 5300;

httpServer.listen({ port: PORT }, () =>
  console.log(`Hola Mundo API GraphQL --> http://localhost:${PORT}/graphql`)
);
