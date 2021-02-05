const mongoose = require('mongoose');

module.exports = function () {
    try {
        mongoose.connect('mongodb://localhost/tododb', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        console.log('Connection to db successful!!!!');
    }
    catch (err) {
        console.log(err);
    }
}