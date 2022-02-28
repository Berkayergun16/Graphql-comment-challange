const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const {users, posts, comments} = require('./data');
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        city: String!
        posts: [Post!]!

    }
    type Post {
        id: ID!
        title: String!
        userId: ID!
        user: User!
        comments: [Comment!]!
        
    }
    type Comment {
        id: ID!
        text: String!
        postId: ID!
        user : User!
        posts : Post!
    }

    type Query {
        # User
        users: [User!]!
        user (id: ID!): User!

        #Post
        posts: [Post!]!
        post (id: ID!): Post!

        #Comments
        comments: [Comment!]!
        comment(id: ID!): Comment!
    }
`

const resolvers = {
    Query: {
        //! Users
        users  : () => users,
        user: (parent, args, context, info) => {
            const user = users.find(user => user.id === args.id);
            if(!user){
                throw Error("User not found")
            }
            return user;
        },

        //! Posts
        posts  : () => posts,
        post : (parent, args, context, info) => {
            const post = posts.find(post => post.id === args.id);
            if(!post){
                throw Error("Post not found")
            }
            return post;
        },

        //! Comments
        comments: () => comments,
        comment : (parent, args, context, info) => {
            const comment = comments.find(comment => comment.id === args.id);
            if(!comment){
                throw Error("Comment not found")
            }
            return comment;
        },
    },
    User: {
        posts: (parent, args, context, info) => {
            return posts.filter(post => post.userId === parent.id);
        }
    },
    Post: {
        user: (parent, args, context, info) => {
            return users.find(user => user.id === parent.userId);
        },
        comments: (parent, args, context, info) => {
            return comments.filter(comment => comment.postId === parent.id);
        }
    },
    Comment: {
        user: (parent, args, context, info) => {
            return users.find(user => user.id === parent.userId);
        },
        posts: (parent, args, context, info) => {
            return posts.find(post => post.id === parent.postId);
        }
    }
   
  };

  const server = new ApolloServer({ typeDefs, resolvers , plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    })
  ]});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });