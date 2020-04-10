const { Seeder } = require('mongo-seeding');
const path = require('path');

const DATABASE_URL = process.env.DATABASE_URL || 'http://localhost'
const db  = `mongodb://${DATABASE_URL}:27017/data`

const config = {
  database: db,
  dropDatabase: true,
  dropCollections: true
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve("./seeds")
);

seeder
  .import(collections)
  .then(() => {
    console.log('Seeding complete');
  })
  .catch(err => {
    console.log('Error', err);
  });