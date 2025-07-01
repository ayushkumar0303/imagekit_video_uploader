import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function Post(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and Password are required" },
        { status: 400 }
      );
    }
    await connectToDatabase();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already registered" },
        { status: 400 }
      );
    }

    await User.create({ email, password });

    return NextResponse.json(
      { error: "User registered successfully" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Registered error", error);
    return NextResponse.json(
      { error: "failed to register user" },
      { status: 400 }
    );
  }
}
