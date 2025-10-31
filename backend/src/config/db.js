import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const username = process.env.db_user;
        const password = process.env.db_pass;

        const url = `mongodb+srv://${username}:${password}@cluster0.bfw4hqv.mongodb.net/crudDB?retryWrites=true&w=majority&tls=true`

        const conn = await mongoose.connect(url);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(`MongoDB Error: ${error.message}`);
    }
}