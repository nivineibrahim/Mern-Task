const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDataBase = require("./configuration/database");
const itemRoutes = require("./routes/itemRoute");
const mobileValidationRoutes = require("./routes/mobileValidationRoute");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api", itemRoutes);
app.use("/api", mobileValidationRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

//connect db
connectDataBase();

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server running on port ${PORT}`);
});