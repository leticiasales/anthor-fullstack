const { mapToEntities } = require("../helper");
const actors = [
  "Brad Pitt", 
  "Charlize Theron", 
  "Chris Evans", 
  "Leonardo DiCaprio", 
  "Margot Robbie", 
  "Mark Ruffalo", 
  "Nicole Kidman", 
  "Robert Downey Jr"
];

module.exports = mapToEntities(actors);
