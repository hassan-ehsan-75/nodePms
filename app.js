const express = require('express');
const app = express();
const setup=require('./setup/load_modules');
const setupGraphQl=require('./setup/graphql');
const setupRoutes=require('./setup/routes');

setup(app);

setupRoutes(app);

setupGraphQl(app);

module.exports = app;
