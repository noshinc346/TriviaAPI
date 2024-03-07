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

  export const getQuestion = async (req, res) => {
    try {
      const {id} = req.params
      const question = await Question.findById(id)
      if (question) {
        return res.json(question)
      }
      res.status(404).json({message: "Question not found!"})
    } catch (error) {
      console.error(error)
      res.status(500).json({error: error.message})
    }
  }

  export const getQuestionByCategory = async (req, res) => {
    try {
      const {category} = req.params
      const question = await Question.find({category})
      if (question) {
        return res.json(question)
      }
      res.status(404).json({message: "Question not found!"})
    } catch (error) {
      console.error(error)
      res.status(500).json({error: error.message})
    }
  }

  export const getQuestionbyDifficulty = async (req, res) => {
    try {
      const {difficulty} = req.params
      const question = await Question.find(difficulty)
      if (question) {
        return res.json(question)
      }
      res.status(404).json({message: "Question not found!"})
    } catch (error) {
      console.error(error)
      res.status(500).json({error: error.message})
    }
  }

  export const getQuestionbyCategoryAndDifficulty = async (req, res) => {
    try {
      const {category, difficulty} = req.params
      const question = await Question.find({category, difficulty})
      if (question) {
        return res.json(question)
      }
      res.status(404).json({message: "Question not found!"})
    } catch (error) {
      console.error(error)
      res.status(500).json({error: error.message})
    }
  }
  

  export const createQuestion = async (req, res) => {
    try {
      const question = new Question(req.body)
      await question.save()
  
      res.status(201).json(question)
    } catch (error) {
      console.error(error)
      res.status(500).json({error: error.message})
    }
  }

  export const updateQuestion = async (req, res) => {
    try {
      const {id} = req.params
  
      const question = await Question.findByIdAndUpdate(id,req.body)
  
      res.status(201).json(question)
    } catch (error) {
      console.error(error)
      res.status(500).json({error: error.message})
    }
  }

  export const deleteQuestion = async (req, res) => {
    try {
      const {id} = req.params
      const deleted = await Question.findByIdAndDelete(id)
  
      if(deleted) {
        return res.status(200).send("Question Deleted")
      }
  
      throw new Error("Question not found.")
  
    } catch (error) {
      console.error(error)
      res.status(500).json({error: error.message})
    }
  }

  