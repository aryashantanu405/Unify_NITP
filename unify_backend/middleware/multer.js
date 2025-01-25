const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("./config/cloudinary_config");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => 'png',
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage });
module.exports = upload;