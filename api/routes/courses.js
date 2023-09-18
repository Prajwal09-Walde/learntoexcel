import express from 'express';
import { createCourse, getCourse, getCourses } from '../controller/course.js';

const router = express.Router();

/*CREATE COURSE*/
router.post("/", createCourse);

/*GET COURSE*/
router.get("/find/:id", getCourse);

/*GET COURSES*/
router.get("/", getCourses);

export default router;