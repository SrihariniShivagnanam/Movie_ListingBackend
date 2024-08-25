const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Connected');
    } catch(err) {
        console.error('MongoDB connecting error',err);
        throw err;
    }
}

module.exports = connectDB;