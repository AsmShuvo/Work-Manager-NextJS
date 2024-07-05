import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req) {
  const { name, email, password, about, profileURL } = await req.json();
  console.log(name, email, password, about, profileURL);
  const newUser = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    const createdUser = await newUser.save();
    console.log(createdUser);
    const res = NextResponse.json(newUser, {
      status: 201,
    });
    return res;
  } catch (err) {
    console.log("Error creating user", err);
    return NextResponse.json({
      message: "failed to create user",
      status: false,
    });
  }

  return res;
}

export function DELETE() {
  console.log("Delete epi called");
  return NextResponse.json({
    message: "deleted!",
    status: true,
  });
}

export function PUT() {}
