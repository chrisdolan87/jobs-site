import mongoose, {Schema} from "mongoose";

const jobSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;