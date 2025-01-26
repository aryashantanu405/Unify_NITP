const express = require("express");
<<<<<<< HEAD
const myClub = require("../models/club_model");
const router = express.Router();
const upload = require("../middleware/multer");
const { getUrl } = require("../config/cloudinary_config");

// Register a new club
router.post("/unify/crcl", async (req, res) => {
  try {
    const newClub = await myClub.create(req.body);
    res.status(200).json(newClub);
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});

// Upload Club logo
router.put("/upload/logo/:id", upload.single("image"), async (req, res) => {
  try {
    const url = await getUrl(req.file.path);
    console.log("image uploaded");

    const { id } = req.params;
    const updateCode = {
      info: {
        logo: url,
      },
    };
    const meraClub = await myClub.findByIdAndUpdate(id, updateCode);
    if (!meraClub) {
      return res.status(404).json({ msg: "No Clubs found" });
    }
    const updatedClub = await myClub.findById(id);
    res.status(200).json(updatedClub);
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});

//Edit club info => i.e., Adding event, Adding member, Other editing purposes
router.put("/editinfo/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const newMem = await myClub.findByIdAndUpdate(id, req.body);
      if (!newMem) {
        return res.status(404).json({ msg: "Club not found :(" });
      }
      const updatedClub = await myClub.findById(id);
      res.status(200).json(updatedClub);
    } catch (e) {
      res.status(500).json({ msg: e });
    }
  });

//Get Office Bearers
router.get("/getob/:id", async (req, res) => {
    try{
      const {id} = req.params;
      const club = await myClub.findById(id);
      if(!club)
      {
        return res.status(404).json({ msg: "Club not found :(" });
      }
      console.log("hello");
      
      const officeBearers = club.info.members.filter(member => member.isOfficeBearer);
      res.status(200).json(officeBearers)
    }
    catch(e)
    {
      res.status(500).json({ msg: e });
    }
  })

//Get TCF Events
router.get("/gettcfevnt/:id", async (req, res) => {
    try{
      const {id} = req.params;
      const club = await myClub.findById(id);
      if(!club)
      {
        return res.status(404).json({ msg: "Club not found :(" });
      }
      console.log("hello");
      
      const tcfEvents = club.info.event.filter(event => event.isTCFEvent);
      res.status(200).json(tcfEvents);
    }
    catch(e)
    {
      res.status(500).json({ msg: e });
    }
  })
  // Get all events from all clubs
router.get("/events", async (req, res) => {
  try {
    const clubs = await myClub.find();
    const allEvents = clubs.reduce((events, club) => {
      return events.concat(club.event);
    }, []);
    res.status(200).json(allEvents);
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});
module.exports = router;
=======
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
>>>>>>> e5a66828dbf426378df4156e38b60dd11b92817b
