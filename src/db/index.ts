import "dotenv/config";
import mongoose from "mongoose";
import { MONGO_URI } from "../utils/variables"; 

console.log("What" + MONGO_URI)
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("db failed: ", err);
  });
