import { Router } from "express";
import questionRoutes from "./questions.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/questions", questionRoutes)

export default router;