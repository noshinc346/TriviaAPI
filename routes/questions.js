import { Router } from "express";
import * as controllers from "../controllers/questions.js";

const router = Router();

router.get("/", controllers.getQuestions);
router.get("/:id", controllers.getQuestion);
router.get("/category/:category", controllers.getQuestionByCategory)
router.get("/difficulty/:difficulty", controllers.getQuestionbyDifficulty);

router.get("/category/:category/difficulty/:difficulty", controllers.getQuestionbyCategoryAndDifficulty);

router.post("/", controllers.createQuestion);
router.put("/:id", controllers.updateQuestion);
router.delete("/:id", controllers.deleteQuestion)


export default router;