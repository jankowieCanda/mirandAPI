import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = `${process.env.ATLAS_MONGO}${process.env.MONGO_DATABASE}`;

mongoose.connect(connection);