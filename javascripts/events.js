const tmdb = require('./tmdb');

const myLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'login') {
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
    } else if (e.target.id === 'favMovies') {
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
    } else if (e.target.id === 'searchMovies') {
      $('#myMovies').addClass('hide');
      $('#search').removeClass('hide');
      $('#authScreen').addClass('hide');
    }
  });
};

const pressEnter = () => {
  // big old keypress event
  tmdb.showResults();
};

const initializer = () => {
  myLinks();
  pressEnter();
};

module.exports = {
  initializer,
};
