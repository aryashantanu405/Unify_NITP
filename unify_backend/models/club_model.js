const mongoose = require("mongoose")
const members = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  isOfficeBearer: {
    type: Boolean,
    default: false,
  },
  isFoundingMember: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    required: function()
    {
      return  this.isOfficeBearer;
    }
  },
  info: {
    type: String,
  }
});
const profIncharge = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  info: {
    type: String
  }
})
const events = mongoose.Schema({
  eventInfo: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    venue:{
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
    registrationlink: {
      type: String,
    },
    //organizedBy: club.info.name,
  },
  album: [String],
  isTCFEvent: {
    type: Boolean,
    default: false,
  }
});
const club = mongoose.Schema({
  info: {
    description: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    members : [members],
    pi: profIncharge,
    yearOE: {
      type: Number,
    },
    logo:{
      type: String,
    }
  },
  event: [events],
  tcf: [events], //Highlights of TCF of club
  album: [String], //Image Gallery of club
});
const myClub = mongoose.model("Unify-Clubs", club);
module.exports = myClub;