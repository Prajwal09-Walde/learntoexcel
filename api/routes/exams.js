import express from 'express';
import { createExam, getExam, getExams } from '../controller/exam.js';

const router = express.Router();

/*CREATE EXAM*/
router.post("/:courseid", createExam);

/*GET EXAM*/
router.get("/:id", getExam);

/* GET EXAMS */
router.get("/", getExams);

export default router;