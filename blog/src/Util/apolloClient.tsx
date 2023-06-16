// client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {BASE_URL} from "../app/Constants";
import { gql } from "@apollo/client";

const { GITHUB_TOKEN } = process.env;

// Create the http link
const httpLink = createHttpLink({
    uri: BASE_URL,
});

// Generate and set the header with the auth details
const authLink = setContext((_, { headers }) => {
    // get the authentication token from env variables if it exists

    // const token = GITHUB_TOKEN;

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            // authorization: `Bearer ${token}`,
        },
    };
});


// Generate your client with the authLink and httpLink
export const apiClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});

export const CreateCategory = gql`
        mutation createCategory($name: String!,$image: String!) {
            createCategory(name:$name,image:$image)
            {name image }
         }
`;
export const CreatePost = gql`
        mutation createPost($name: String!,$image: String!,$desc :String!,$category_id:String!) {
             createPost(title:$name,attachment:$image,description:$desc,category_id:$category_id)
  {title attachment }
         }
`;
