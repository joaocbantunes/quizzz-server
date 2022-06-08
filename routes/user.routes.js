const router = require("express").Router();
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");

router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }

  res.json({ fileUrl: req.file.path });
});

router.get("/user", (req, res, next) => {
  const { _id } = req.payload;
  User.findById(_id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete("/user/:userId/delete", (req, res, next) => {
  const { userId } = req.params;
  //const { _id } = req.payload;
  User.findByIdAndDelete(userId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put("/user/:userId", (req, res, next) => {
  const { userId } = req.params;
  const { username, email, image } = req.body;

  User.findByIdAndUpdate(
    userId,
    {
      username,
      email,
      profileImage: image,
    },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json({ message: "No user updated" }));
});

module.exports = router;
