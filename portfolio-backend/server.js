
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const contactRoutes = require("./routes/contact");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio backend running with database");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
