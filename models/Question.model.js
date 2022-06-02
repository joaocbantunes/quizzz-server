const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  id: {
    type: String,
  },
  question: {
    type: String,
  },
  answers: [
    {
      type: String,
    },
  ],
  correct_answers: [
    {
      type: String,
    },
  ],
  correct_answer: {
    type: String,
  },
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
