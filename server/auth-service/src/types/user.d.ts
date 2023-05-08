import { Date, Document } from "mongoose";

export type UserType = {
  name: string;
  communication: {
    email: string;
    phoneNumber: string;
  };
  password: string;
  gender: "male" | "female" | "other";
  createdAt: Date;
};

type UserDocumentType = UserType & Document;

export default UserDocumentType;
