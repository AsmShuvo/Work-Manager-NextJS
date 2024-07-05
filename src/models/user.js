import mongoose, { Schema, mongo } from "mongoose";

// design schema > modal creation

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    require: [true, "Email required"],
  },
  password: {
    type: String,
    require: [true, "Password Required"],
  },
  about: String,
  profileURL: String,
  address: {
    street: String,
    City: String,
    pinCode: Number,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
