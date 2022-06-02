const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
  },
  createQuestion: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  difficulty: {
    type: String,
  },
});

const User = model("User", userSchema);

module.exports = User;
