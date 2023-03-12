const { GraphQLInt, GraphQLString, GraphQLObjectType } = require('graphql');

const UserType=new GraphQLObjectType({
    name:'user',
    description:'User Type',
    fields:()=>({
        _id:{ type: GraphQLString },
        name:{ type: GraphQLString },
        email:{ type: GraphQLString },
        avatar:{ type: GraphQLString },
        is_admin:{ type: GraphQLInt },
        token:{ type: GraphQLString },
    })
});

const UserLoginType=new GraphQLObjectType({
    name:'userLogin',
    description:'User Login Type',
    fields:()=>({
        user:{ type: UserType },
        token:{ type: GraphQLString },
    })
});
const UserGenderType=new GraphQLObjectType({
    name:'user Gender',
    description:'User Gender Type',
    fields:()=>({
        id:{ type: GraphQLInt },
        name:{ type: GraphQLString },
    })
});

module.exports= {UserType,UserLoginType,UserGenderType};
