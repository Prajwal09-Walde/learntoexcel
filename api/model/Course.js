import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        exams: {
            type: [String],
        }
    }
        
);

export default mongoose.model("Course", courseSchema);