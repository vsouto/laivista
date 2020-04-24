const express = require('express'),
  app = express(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'),
  Artist = require('./api/models/artistModel'),
  Live = require('./api/models/LiveModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/laivista')

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const artistRoutes = require('./api/routes/artistRoutes');
artistRoutes(app);

const userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

const liveRoutes = require('./api/routes/liveRoutes');
liveRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port);
