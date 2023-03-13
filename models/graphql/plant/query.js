const {GraphQLString,GraphQLList}=require('graphql');
const {PlantType} =require('./types');
const {getAll}=require('../../../controllers/graphql/plantResolver');

exports.plants={
    type:GraphQLList(PlantType),
    resolve:getAll
};
