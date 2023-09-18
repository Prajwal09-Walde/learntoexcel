import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        totalMarks: {
            type: Number,
            required: true,
        },
        passMark: {
            type: Number,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        questions: {
            type: [String],
        }
    }
);

export default mongoose.model("Exam", examSchema);