const {GraphQLList}=require('graphql');

const {categoryType}=require('./types');

const {getAll}=require('../../../controllers/graphql/categoryResolver');

exports.categories={
    type:new GraphQLList(categoryType),
    resolve:getAll
};
