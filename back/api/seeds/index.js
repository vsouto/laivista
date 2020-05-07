const { Seeder } = require('mongo-seeding');

const config = {
  database: 'mongodb://127.0.0.1:27017/laivista',
  dropDatabase: true,
};

const seeder = new Seeder(config);
