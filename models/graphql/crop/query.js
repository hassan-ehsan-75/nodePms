const {GraphQLList}=require('graphql');
const {cropType}=require('./types');
const {getAll}=require('../../../controllers/graphql/cropResolver');

exports.crops={
    type:new GraphQLList(cropType),
    resolve:getAll
};