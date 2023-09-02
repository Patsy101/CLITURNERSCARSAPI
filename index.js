const mongoose = require('mongoose');

//Map global promise -to get rid of warning
mongoose.Promise = global.Promise;
//connecting to database
const db = mongoose.connect('mongodb://localhost:27017/turnerscarsapi', {
  useMongoClient: true,
});
