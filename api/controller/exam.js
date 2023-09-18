import Course from "../model/Course.js"
import Exam from "../model/Exam.js";

export const createExam = async (rq, rs, next) => {
    const courseId = rq.params.courseid;
    const newExam = new Exam(rq.body);
    try {
        const savedExam = await newExam.save();
        try {
            await Course.findByIdAndUpdate(courseId, {
                $push: {exams: savedExam._id},
            })
        }catch (err) {
            next (err);
        }
        rs.status(200).json(savedExam)
    }catch (err) {
        next (err);
    }
};

export const getExam = async (rq, rs, next) => {
    try {
        const exam = await Exam.findById(rq.params.id);
        rs.status(200).json(exam);
    }catch (err) {
        next (err);
    }
};

export const getExams = async (rq, rs, next) => {
    try {
        const exams = await Exam.find();
        rs.status(200).json(exams);
    }catch (err) {
        next (err);
    }
};