const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const app = express();
const frontendOrigin = process.env.FRONTEND_URL;
if (process.env.NODE_ENV === "production" && !frontendOrigin) {
 console.error("FRONTEND_URL must be set in production.");
 process.exit(1);
}
app.use(cors(frontendOrigin ? { origin: frontendOrigin } : undefined));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
 res.send("Tech4Youth API is running!");
});
const PORT = process.env.PORT || 5000;
const startServer = async () => {
 if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  console.error("JWT_SECRET must be set to a value of at least 32 characters.");
  process.exit(1);
 }
 await connectDB();
 app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 });
};
startServer();