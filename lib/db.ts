import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('Succeeded to connected to MongooDB');
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
    }
}

export default connectDB;