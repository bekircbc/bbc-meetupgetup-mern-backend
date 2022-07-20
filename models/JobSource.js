import mongoose from "mongoose";

const meetupSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  adress: String,
  description: String,
});

export const Meetup = mongoose.model("meetups", meetupSchema);
