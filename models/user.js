import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        cv: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;