const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexroutes = require("./routes/routes.index");
dotenv.config();
const registerModel = require("./models/register.model");
const connecttodb = require("./config/registerdb");
connecttodb();
const app = express();
app.use(cors({
  origin:process.env.ALLOWED_ORIGINs,
  methods:['GET','POST','PUT','DELETE'],
  credentials:true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', indexroutes);
app.listen(3000);
