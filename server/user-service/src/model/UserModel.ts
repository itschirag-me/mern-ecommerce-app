import { Schema, model } from "mongoose";
import UserDocumentType from "../types/user";
import bcrypt from "bcrypt";

const userSchema = new Schema<UserDocumentType>({
  name: {
    type: String,
    required: true,
  },
  communication: {
    email: {
      type: String,
      required: true,
      unique: [true, "email already exists"],
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = model("user", userSchema);

export default User;
