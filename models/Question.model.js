const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  id: {
    type: String,
  },
  question: {
    type: String,
  },
  answers: [{
    answer: String,
    isCorrect: Boolean
  }],
  tags: [
    {
      type: String,
    },
  ],
  difficulty: {
    type: String,
  },
});

const Question = model("Question", questionSchema);

module.exports = Question;
