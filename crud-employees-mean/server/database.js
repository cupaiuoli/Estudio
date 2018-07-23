const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('DB Conectada en', URI))
    .catch(err => console.error(err));

module.exports = mongoose;