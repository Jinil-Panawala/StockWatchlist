const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODBURI);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;