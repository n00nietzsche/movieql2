import fetch from 'node-fetch';
const API_URL = 'https://yts.am/api/v2/list_movies.json?';

// REST API to GraphQL API
export const getMoviesFromAPI = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  console.log(REQUEST_URL);

  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};

let movies = [
  {
    id: 0,
    name: 'Star Wars - The new one',
    score: 0.1
  },
  {
    id: 1,
    name: 'Avengers - The new one',
    score: 8
  },
  {
    id: 2,
    name: 'The Godfather I - The new one',
    score: 99
  },
  {
    id: 3,
    name: 'Logan',
    score: 2
  }
];

const people = [
  {
    id: 0,
    name: 'Nicolas',
    age: 18,
    gender: 'female'
  },
  {
    id: 1,
    name: 'Nicolas2',
    age: 15,
    gender: 'male'
  }
];

export const getByIdPerson = id => {
  console.log(id);
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};

export const getById = id => {
  console.log(id);
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const getMovies = () => movies;

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score
  };

  movies.push(newMovie);
  return newMovie;
};

export { people };
