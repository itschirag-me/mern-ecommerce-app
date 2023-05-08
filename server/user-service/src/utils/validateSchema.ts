import Joi from "joi";
import { UserType } from "../types/user";
import FilterType, { FilterTypeQuery } from "../types/filter.d";

export const userSchema = Joi.object<UserType>({
  name: Joi.string()
    .trim()
    .regex(/^[a-zA-Z\s'\-]+$/, "alphabet only")
    .min(2)
    .max(50)
    .required(),
  communication: Joi.object({
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().min(8).max(14).required(),
  }).required(),
  password: Joi.string().min(8).max(10).required(),
  gender: Joi.string().valid("male", "female", "other").required(),
});

export const filterSchema = Joi.object<FilterTypeQuery>({
  page: Joi.string(),
  limit: Joi.string(),
  field: Joi.string()
});
