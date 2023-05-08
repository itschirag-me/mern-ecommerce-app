import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import UserDocumentType from "../types/user";

const userSchema = new Schema<UserDocumentType>({
  name: {
    type: String,
    required: true,
  },
  communication: {
    email: {
      type: String,
      required: true,
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
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.methods.encryptPassword = function () {
  return new Promise(async (resolve, reject) => {
    try {
      const salt = await bcrypt.genSaltSync(20);
      this.password = await bcrypt.hashSync(this.password, salt);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

const User = model("user", userSchema);

export default User;
