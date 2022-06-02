const router = require("express").Router();
const authRoutes = require("./auth.routes");

const Question = require("../models/Question.model");

router.post("/quiz", (req, res, next) => {
  const { question, answer, category, difficulty } = req.body;

  quiz
    .create({ question, answer, category, difficulty })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/quiz", (req, res, next) => {
  Question.find({})
    .then((allQuiz) => res.json(allQuiz))
    .catch((err) => res.json(err));
});

module.exports = router;
