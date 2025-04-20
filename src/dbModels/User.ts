import mongoose, { Schema, model, models, Model } from "mongoose";

export type Role = "user" | "admin";

export interface IUser {
  email: string;
  password: string;
  role: Role;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    name: { type: String },
  },
  { timestamps: true }
);

// ✅ This avoids the `Document` weirdness
const User: Model<IUser> = models.User || model<IUser>("User", UserSchema);

export { User };
