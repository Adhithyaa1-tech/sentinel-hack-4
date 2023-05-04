const mongoose = require('mongoose');

module.exports.connectDatabase = () => {
    mongoose.connect('mongodb://localhost:27017/FinanceHandler')
        .then(con => console.log(`db connected to ${con.connection.host}`))
        .catch(err => console.log(err));
}