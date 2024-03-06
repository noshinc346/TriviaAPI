import Question from "../models/Question.js";

export const getQuestions = async(req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions)
    } catch (error) {
      console.error(error)
      res.status(500).json({error: error.message})
    }
  }