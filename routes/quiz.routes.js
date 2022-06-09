const router = require("express").Router();
const authRoutes = require("./auth.routes");

const Question = require("../models/Question.model");
const Quiz = require("../models/Quiz.model");

router.post("/quiz-easy", (req, res, next) => {
  const { title } = req.body;

  Question.find({difficulty: "Easy"})
  .then((allQuestions) => {
    let randomArr = [];
    for (let i = 0; i <= 10; i++) {
      const random = Math.floor(Math.random() * allQuestions.length);
      randomArr.unshift(allQuestions[random]);
    }
    return Quiz.create({ title, questions: randomArr })
    .then((createdQuiz) => {
      res.json(createdQuiz);
    });
  });
});

router.post("/quiz-medium", (req, res, next) => {
  const { title } = req.body;

  Question.find({difficulty: "Medium"})
  .then((allQuestions) => {
    let randomArr = [];
    for (let i = 0; i <= 10; i++) {
      const random = Math.floor(Math.random() * allQuestions.length);
      randomArr.unshift(allQuestions[random]);
    }
    return Quiz.create({ title, questions: randomArr }).then((createdQuiz) => {
      res.json(createdQuiz);
    });
  });
});

router.post("/quiz-hard", (req, res, next) => {
  const { title } = req.body;

  Question.find({difficulty: "Hard"})
  .then((allQuestions) => {
    let randomArr = [];
    for (let i = 0; i <= 10; i++) {
      const random = Math.floor(Math.random() * allQuestions.length);
      randomArr.unshift(allQuestions[random]);
    }
    return Quiz.create({ title, questions: randomArr }).then((createdQuiz) => {
      res.json(createdQuiz);
    });
  });
});

router.get("/quiz/:id", (req, res, next) => {
  const { id } = req.params;
  Quiz.findById(id)
    .populate("questions")
    .then((allQuiz) => {
      res.json(allQuiz);
    })
    .catch((err) => res.json(err));
});

router.get("/quiz", (req, res, next) => {
  Question.find({})
    .then((allQuiz) => res.json(allQuiz))
    .catch((err) => res.json(err));
});

router.delete("/quiz/:_id/delete", (req, res, next) => {
  const { _id } = req.params;
  Question.findByIdAndDelete(_id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put("/quiz/:_id", (req, res, next) => {
  const { _id } = req.params;
  const { question, answers, tags, difficulty } = req.body;
  if (req.file) {
    Question.findByIdAndUpdate(
      _id,
      {
        question,
        answers,
        tags,
        difficulty,
      },
      { new: true }
    )
      .then((response) => res.json(response))
      .catch((err) => res.status(400).json({ message: "No user updated" }));
  } else {
    Question.findByIdAndUpdate(
      _id,
      {
        question,
        answers,
        tags,
        difficulty,
      },
      { new: true }
    )

      .then((response) => res.json(response))
      .catch((err) => res.status(400).json({ message: "No user updated" }));
  }
});

module.exports = router;
