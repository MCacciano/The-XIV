const path = require('path');

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/typeDefs/index');
const resolvers = require('./src/resolvers/index');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const XivApi = require('./src/datasources/xivapi/xivApi');
const MongoDB = require('./src/datasources/mongodb/mongodb');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    xivApi: new XivApi(),
    db: new MongoDB()
  })
});

const PORT = process.env.PORT || 5000;

app.use('/discord', require('./auth/discord'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'discordAuth.html'));
});

server.applyMiddleware({ app, path: '/graphql' });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@xiv-r3kpa.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`MongoDB connected`);
    app.listen({ port: PORT }, () => {
      console.log(`Apoller Server running at http://localhost:${PORT}/graphql`);
    });
  })
  .catch(err => console.error(err));
