const router = require("express").Router();
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");

router.get("/user", (req, res, next) => {
  const { _id } = req.payload;
  console.log(req.payload);
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

router.put(
  "/user/:userId",
  fileUploader.single("imageUrl"),
  (req, res, next) => {
    const { userId } = req.params;
    const { username, email } = req.body;
    if (req.file) {
      User.findByIdAndUpdate(
        userId,
        {
          username,
          email,
          imageUrl: req.file.path,
        },
        { new: true }
      )
        .then((response) => res.json(response, req.file.path))
        .catch((err) => res.status(400).json({ message: "No user updated" }));
    } else {
      User.findByIdAndUpdate(
        userId,
        {
          username,
          email,
        },
        { new: true }
      )

        .then((response) => res.json(response))
        .catch((err) => res.status(400).json({ message: "No user updated" }));
    }
  }
);

module.exports = router;
