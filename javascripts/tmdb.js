/* eslint camelcase: 0 */

const dom = require('./dom');

//

let tmdbKey = '';

const setKey = (key) => {
  tmdbKey = key;
};

const showResults = (searchText) => {
  searchTMDB(searchText)
    .then((result) => {
      dom.domString(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
  //
};

const searchTMDB = (txt) => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${txt}&language=en-US&page=1&include_adult=false`)
      .done((result) => {
        resolve(result.results);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  showResults,
  setKey,
};
