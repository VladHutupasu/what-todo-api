import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectionString = process.env.DB_STRING;
console.log(connectionString);

const connectToDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      autoIndex: true,
    });
    console.log("Connected to database 🎉");
  } catch (error) {
    console.error("Error while connecting to the DB: ", error);
  }
};
export default connectToDB;
