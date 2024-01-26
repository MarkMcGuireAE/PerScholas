const mongoose = require("mongoose")

const mongoConfig = async () => {

   const result = await mongoose.connect(process.env.MONGO_URL)

   console.log("database connected", result.connection.host)

}

module.exports = mongoConfig