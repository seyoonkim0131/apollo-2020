import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    // uri: 'https://movieql.now.sh/',
    // uri: 'https://yts.mx/api/v2/list_movies.json?sort_by=year'
    // uri: 'https://apollo2020.herokuapp.com'
    uri: 'http://localhost:4000',
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