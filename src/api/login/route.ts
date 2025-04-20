import { connectDB } from "@/lib/db";
import { User } from "@/dbModels/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = generateToken(user);

  return Response.json({ token, user });
}
