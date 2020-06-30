import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: 'https://apollo2020.herokuapp.com',
    // uri: 'http://localhost:4000', for DEV
    resolvers: {
        Movie: {
            isLiked: () => false
        }, 
        Mutation: {
            toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
                cache.writeData({
                    id: `Movie:${id}`,
                    data: {
                        isLiked: !isLiked
                    }
                })
            },
        }
    }
});

export default client;