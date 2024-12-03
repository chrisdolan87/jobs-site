import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        // await mongoose.connect("mongodb+srv://b01146374:b01146374@cluster0.igaj5.mongodb.net/");
        await mongoose.connect(`mongodb+srv://b01146374:b01146374@cluster0.igaj5.mongodb.net/jobs_site`);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;