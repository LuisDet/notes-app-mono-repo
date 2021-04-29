const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose;
