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

type UserModelType = UserType & {
  encryptPassword(): Promise<UserDocumentType>;
  comparePassword(): Promise<boolean>;
};

type UserDocumentType = UserModelType & Document;

export default UserDocumentType;
