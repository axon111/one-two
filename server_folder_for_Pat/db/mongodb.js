const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

function connectToMongoDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(
        () => {
            console.log("MongoDB connected!");
        }
    )
    .catch(
        (error) => {
            console.log("Connection to MongoDB failed:" + error);
        }
    )
}

module.exports = connectToMongoDB;