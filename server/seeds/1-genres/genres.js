const { mapToEntities } = require('../helper');
const genres = [
  'Action',
  'Comedy',
  'Drama', 
  'Science Fiction'
];

module.exports = mapToEntities(genres);
