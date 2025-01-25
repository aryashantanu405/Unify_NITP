const mongoose = require("mongoose");
const express = require("express");

const dotenv = require("dotenv");
const indexroutes = require("./routes/routes.index");
const connecttodb = require("./config/registerdb");
connecttodb();
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', indexroutes);

app.listen(3000, () => {
    console.log("Server is listening to port 3000...");
});