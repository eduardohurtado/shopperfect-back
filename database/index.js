const mongoose = require("mongoose");

const URI =
    "mongodb+srv://dbUser:2020@cluster0.j3vlz.mongodb.net/ShopperfectDB?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
};

mongoose
    .connect(URI, options)
    .then(() => console.warn("Mongo DB is conected."))
    .catch((err) => console.log(err));

module.exports = mongoose;
