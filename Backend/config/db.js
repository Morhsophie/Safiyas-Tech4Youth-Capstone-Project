const mongoose = require("mongoose");
const connectDB = async () => {
 try {
 const mongoUrl = process.env.MONGO_URI || process.env.MONGO_URL;
 if (!mongoUrl) {
 throw new Error("MONGO_URI is not set in the backend environment.");
 }
 await mongoose.connect(mongoUrl);
 console.log("MongoDB connected successfully!");
 } catch (error) {
 console.error("MongoDB connection failed:", error.message);
 process.exit(1);
 }
};
module.exports = connectDB;
