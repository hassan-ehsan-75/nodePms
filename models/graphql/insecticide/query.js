const {GraphQLList}=require('graphql');
const {InsecticideType} =require('./types');
const {getAll}=require('../../../controllers/graphql/insecticideResolver');

exports.insecticides={
    type:GraphQLList(InsecticideType),
    resolve:getAll
};
