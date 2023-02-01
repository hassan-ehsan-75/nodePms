
//Original Types
const { GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
//Custom Types
const {UserType,UserLoginType,UserGenderType} =require('./types');
//Resolver:Controller
const { getAll, getById, login } = require('../../../controllers/graphql/userResolver');


// All
exports.users = {
    type: new GraphQLList(UserType),
    resolve: getAll
};
// find
exports.user = {
    type: UserType,
    args: {
        id: { type: GraphQLString }
    },
    resolve: getById
};
// find
exports.login = {
    type: UserLoginType,
    args: {
        email: {
            name:'email',
            type: GraphQLString
        },
        password: {
            name:'password',
            type: GraphQLString
        },
    },
    resolve: login
};

