import mongoose from "mongoose";

export const connetion = () =>
  mongoose.connect(process.env.MONGO_CONNECT_URL, () => {
    console.log("🎈🎈🎈 Connection established with mongo database 🎈🎈🎈");
  });
mongoose.set("strictQuery", false);
