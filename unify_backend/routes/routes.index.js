const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const registerModel = require("../models/register.model");
router.post('/register', async (req, res) => {
  const { username, password, about, firstname, lastname, email, branch, city, region, postalcode } = req.body;
  // console.log({ username, password, about, firstname, lastname, email, branch, city, region, postalcode });
  if (!username || !password || !firstname || !branch || !email) {
    return res.status(400).send({ message: "Required fields are missing" });
  }
const hashdpassword = await bcrypt.hash(password, 10);

const newuser=await registerModel.create({
  username:username,
  password:hashdpassword,
  about:about,
  first_name:firstname,
  last_name:lastname,
  email:email,
  branch:branch,
  city: city,
  region: region,
  postal_code: postalcode,
});
});
module.exports=router;