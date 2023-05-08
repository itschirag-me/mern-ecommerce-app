import { StatusCodes } from "http-status-codes";
import User from "../model/UserModel";
import UserDocumentType, { UserType } from "../types/user";
import FilterType from "../types/filter";
import { hashPassword } from "../utils/bcrypt";

/**
 * Retrieve users based on the provided filter options.
 *
 * @param filter The filter options for fetching users.
 * @returns A promise that resolves to an array of UserDocumentType objects.
 */
export async function FetchUsers(
  filter: FilterType
): Promise<{ users: UserDocumentType[]; totalCount: number }> {
  const users: UserDocumentType[] = await User.find({})
    .sort({ [filter.field]: filter.sortOrder })
    .limit(filter.limit)
    .skip((filter.pageNumber - 1) * filter.limit).select("-password -__v");
  const totalCount: number = await User.find({}).count();
  return {
    totalCount,
    users,
  };
}

/**
 * Retrieves a user based on the provided email address.
 *
 * @param email The email address of the user to fetch.
 * @returns The user object matching the provided email, or null if not found.
 */
export async function FetchUserById(
  userId: string
): Promise<UserDocumentType | null> {
  return User.findById(userId);
}

/**
 * Retrieves a user based on the provided email address.
 *
 * @param email The email address of the user to fetch.
 * @returns The user object matching the provided email, or null if not found.
 */
export async function FetchUserByEmail(
  email: string
): Promise<UserDocumentType | null> {
  return User.findOne({ "communication.email": email });
}

/**
 * Creates a new user with the provided payload.
 *
 * @param payload The data for creating the new user
 * @returns A promise that resolves to the created UserDocumentType object
 */
export async function CreateUser(payload: UserType): Promise<UserDocumentType> {
  const user = await FetchUserByEmail(payload.communication.email);

  if (user) {
    const error: any = new Error("This email already exists");
    error.statusCode = StatusCodes.CONFLICT;
    throw error;
  }

  const newUser = new User(payload);
  newUser.password = await hashPassword(newUser.password);

  return newUser.save();
}
