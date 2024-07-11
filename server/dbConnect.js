import mongoose from "mongoose";
async function dbConnect(){
    try {
        await mongoose.connect('mongodb+srv://lms:lms-2023@cluster0.7cmowhy.mongodb.net/');
        console.log('Mongo DB connected successfully');
    } catch (error) {
        console.error("connection failed");
    }
}
dbConnect();