import mongoose from "mongoose";

const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    "type": { type: String },
    "difficulty": { 
                type: String,
                 enum: ["easy", "medium", "hard"]   
                },
    "category": { type: String },
    "question": { type: String },
    "correct_answer": { type: String },
    "incorrect_answers": [ { type: String } ]
})

export default mongoose.model("questions", QuestionSchema)
