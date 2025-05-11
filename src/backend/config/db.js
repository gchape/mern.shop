import mongoose from "mongoose";

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`MongoDB connected ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}

export default connectDB;
