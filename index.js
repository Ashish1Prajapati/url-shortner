const express = require("express");
const connectToMongoDB = require("./connect");
const urlRoute=require("./routes/url");
require('dotenv').config();
const app = express();
const PORT = 4000;
connectToMongoDB(process.env.MONGO_URI)
app.use(express.json())
app.use("/url",urlRoute)
app.listen(PORT, () => {
  console.log("server started:" + PORT);
});
