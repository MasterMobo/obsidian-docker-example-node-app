const mongoose = require('mongoose')
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, MONGO_DB_NAME } = require('../config/env')

const connectDB = async () => {
    const connectUrl =`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DB_NAME}?authSource=admin` 
    try {
        await mongoose.connect(connectUrl)
        console.log("Successfully connected to MongoDB!");
    } catch (e) {
        console.log(e);
    }

}

module.exports = {connectDB}
