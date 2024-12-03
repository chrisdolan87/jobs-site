import mongoose, {Schema} from "mongoose";

const jobSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;