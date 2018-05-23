/* eslint camelcase: 0 */

const dom = require('./dom');

// https://api.themoviedb.org/3/search/movie?api_key=19e19eef4bc998bd30bc83f52fd6eaac&query=cow&language=en-US&page=1&include_adult=false

let tmdbKey = '';

const setKey = (key) => {
  tmdbKey = key;
};

const singleMovie = {
  adult: false,
  backdrop_path: '/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg',
  genre_ids: [28, 12, 878, 14,],
  id: 140607,
  original_language: 'en',
  original_title: 'Star Wars: The Force Awakens',
  overview: 'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
  popularity: 49.408373,
  poster_path: '/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg',
  release_date: '2015-12-15',
  title: 'Star Wars: The Force Awakens',
  video: false,
  vote_average: 7.5,
  vote_count: 7965,
};

const showResults = () => {
  dom.domString([singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,singleMovie,]);
};

module.exports = {
  showResults,
  setKey,
};
