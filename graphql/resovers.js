import { getMovies, getMovie, getSuggestions } from '../database/db';

const resolvers = {
	Query: {
		movies: (_, { rating, limit }) => getMovies(limit, rating),
		movie: (_, { id }) => getMovie(id),
		suggestions: (_, { id }) => getSuggestions(id),
	},
};

export default resolvers;
