
//Original Types
const { GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
//Custom Types
const {UserType,UserLoginType,UserGenderType} =require('./types');
//Resolver:Controller
const { createUser, updateUser, deleteUser } = require('../../../controllers/graphql/userResolver');



exports.createUser = {
    type: UserType,
    args:{
        email:{
            name:'email',
            type:GraphQLString
        },
        name:{
            name:'name',
            type:GraphQLString
        },
        password:{
            name:'password',
            type:GraphQLString
        },
        is_admin:{
            name:'is_admin',
            type:GraphQLInt
        },
    },
    resolve: createUser
};

exports.updateUser = {
    type: UserType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLString
        },
        email:{
            name:'email',
            type:GraphQLString
        },
        name:{
            name:'name',
            type:GraphQLString
        },
        password:{
            name:'password',
            type:GraphQLString
        },
        is_admin:{
            name:'is_admin',
            type:GraphQLInt
        },
    },
    resolve: updateUser
};