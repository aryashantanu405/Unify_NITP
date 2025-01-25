const express = require("express");
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
  
module.exports = router;