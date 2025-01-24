const mongoose = require("mongoose");

function connecttodb() {
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("connected to db");
  });
}


module.exports=connecttodb;