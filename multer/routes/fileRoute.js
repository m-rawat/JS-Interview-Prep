const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.status(200).json({ message: "file uploaded successfully" });
});

module.exports = router;
