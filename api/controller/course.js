import Course from "../model/Course.js";

export const createCourse = async (rq, rs, next) => {
    const newCourse = new Course(rq.body);
    try {
        const savedCourse = await newCourse.save();
        rs.status(200).json(savedCourse)
    }catch (err) {
        next (err);
    }
};

export const getCourse = async (rq, rs, next) => {
    try {
        const course = await Course.findById(rq.params.id);
        rs.status(200).json(course);
    }catch (err) {
        next (err);
    }
};

export const getCourses = async (rq, rs, next) => {
    try {
        const courses = await Course.find();
        rs.status(200).json(courses);
    }catch (err) {
        next (err);
    }
}