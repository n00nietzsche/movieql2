import {
  getMovies,
  getById,
  people,
  getByIdPerson,
  addMovie,
  deleteMovie,
  getMoviesFromAPI
} from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
    people: () => people,
    person: (_, { id }) => getByIdPerson(id),
    moviesFromAPI: (_, { limit, rating }) => getMoviesFromAPI(limit, rating)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
