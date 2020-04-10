const { getObjectId, getObjectIds, mapToEntities } = require('../helper');

const movies = [
  {
    title: 'Bombshell',
    release_date: '20/12/2019',
    genre: getObjectId('Drama'),
    actors: getObjectIds(['Charlize Theron', 'Nicole Kidman', 'Margot Robbie']),
    summarized_plot: 'A group of women take on Fox News head Roger Ailes and the toxic atmosphere he presided over at the network.',
    trailer: 'https://www.imdb.com/video/vi2331492121'
  }, {
    title: 'Avengers: Endgame',
    release_date: '26/04/2019',
    genre: getObjectId('Action'),
    summarized_plot: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    trailer: 'https://www.imdb.com/video/vi2163260441',
    actors: getObjectIds(['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo'])
  }, {
    title: 'Once Upon a Time... in Hollywood',
    release_date: '26/07/2019',
    genre: getObjectId('Comedy'),
    summarized_plot: 'A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood\'s Golden Age in 1969 Los Angeles.',
    trailer: 'https://www.imdb.com/video/vi1385741849',
    actors: getObjectIds(['Brad Pitt', 'Leonardo DiCaprio', 'Margot Robbie'])
  }
];

module.exports = mapToEntities(movies);