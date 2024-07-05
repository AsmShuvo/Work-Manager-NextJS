import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

export const GET = async (req) => {
  let users = [];
  try {
    users = await User.find();
    return NextResponse.json({
      message: "successfully retrieved users",
      success: true,
      users,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }
};

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
